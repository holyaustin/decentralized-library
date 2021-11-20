import { React } from 'react';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Head from 'next/head'

import {
  nftaddress, nftlibraryaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Library from '../artifacts/contracts/Library.sol/NFTLibrary.json'

export default function ReadBook() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  const router = useRouter()

  async function MoreBooks() {
    /* Link to Library Categories*/
    router.push('/catebooks')
  }

  async function Quiz() {
    /* Link to Library Categories*/
    router.push('http://127.0.0.1:8080')
  }
  
  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider()
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const libraryContract = new ethers.Contract(nftlibraryaddress, Library.abi, provider)
    const data = await libraryContract.fetchMyNFTs()

     const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }

  if (loadingState === 'loaded' && !nfts.length) return (<><Navbar /><h1 className="py-10 px-20 text-3xl">No book for you</h1></>)
  {
   return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <br />
        <div className="md:items-center">
          <center>
         
            <h2 className="text-6xl font-bold leading-1 text-black-900 sm:text-5xl hover:opacity-25"> My Reading Space</h2>

          </center>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 pt-4" >
  
          {
            nfts.map((nft, i) => (
              <div key={i} className="-bg-white border shadow rounded-xl overflow-hidden">
                <>
                <iframe className="object-fill h-400 w-full" 
                src={nft.image}
                  frameBorder="0"
                 scrolling="no"
                height="450px"
                width="100%"
                ></iframe> </>
                <div className="p-4">
                  <p style={{ height: '20px' }} className="text-2xl font-semibold">{nft.name}</p>
                </div>
                <div className="p-4 bg-black">
                  <button className="w-full bg-blue-500 text-white font-bold py-2 px-12 rounded" onClick={() => Quiz()}>Take a quiz and Earn an NFT</button>
                </div>
                <div className="p-4 bg-black">
                  <button className="w-full bg-blue-500 text-white font-bold py-2 px-12 rounded" onClick={() => MoreBooks()}>Read more book</button>
                </div>
                
              </div>
            ))
          }
        </div>




      </div>
    </>
  )
  }
}
