/* pages/create-item-ebook.js */
import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import Navbar from '../components/navbar'
import { NFTStorage, File } from 'nft.storage'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGJCNUQ0NTM4NUMzODQ0MTUzZjNlNEU5ZjcwNTFiQUMxYTU3RUMyMjQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNzE0NTg0Mzc4MCwibmFtZSI6ImxpYnJhcnkifQ.ZC5aGh9LnQPv5R86pXYKMzXdXcqjTBLWoBl-DshrFhA'
const client2 = new NFTStorage({ token: apiKey })

import {
  nftaddress, nftlibraryaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Library from '../artifacts/contracts/Library.sol/NFTLibrary.json'

export default function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
  const router = useRouter()

  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  async function createMarket() {
    const { name, description, price } = formInput
    if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name, description, image: fileUrl
    })
          /* after file is uploaded Store to NFT.Storage */
    const metadata = await client2.store({
      name: formInput.name,
      description: formInput.description,
      image: new File([/* data */], 'asset1.jpg', { type: 'image/jpg' })
    })
    console.log(metadata.url)
    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`

      createSale(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }

  async function createSale(url) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()

    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
    let transaction = await contract.createToken(url)
    let tx = await transaction.wait()
    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()

    const price = ethers.utils.parseUnits(formInput.price, 'ether')
  
    /* then list the item for reading or selling on the Library */
    contract = new ethers.Contract(nftlibraryaddress, Library.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()

    transaction = await contract.createMarketItem(nftaddress, tokenId, price, { value: listingPrice })
    await transaction.wait()
    router.push('/csvideos')
  }

  return (
    <>
      <Navbar />
    <br />
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input 
          placeholder="Title of Video Book"
          className="mt-8 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
        />
        <textarea
          placeholder="Description of Author of Video Book )"
          className="mt-2 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
          rows={6}
        />
        <input
          placeholder="Asset Price in MATIC (Add 0 for free videos)"
          className="mt-2 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
        />
        <input
          type="file"
          name="Asset"
          className="my-4"
          onChange={onChange}
        />
        <br />
        {
          fileUrl && (
            <>
            <iframe className="rounded mt-4"
              src={fileUrl}
              frameBorder="0"
              scrolling="auto"
             height="100%"
             width="100%"
            ></iframe>

            </>
          )
        }
        <button onClick={createMarket} className="font-bold mt-4 bg-black text-white rounded p-4 shadow-lg">
          Upload Video (mp4)
        </button>
      </div>
    </div>

    </>
  )
}