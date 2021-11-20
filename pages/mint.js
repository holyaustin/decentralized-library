/* pages/create-item-ebook.js */
import { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import axios from "axios";

export default function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({  name: '' })
  const router = useRouter()

  async function mintNFT() {
    const { name } = formInput
    const options = {
        method: 'POST',
        url: 'https://api.nftport.xyz/v0/mints/easy/urls',
        headers: {
          'Content-Type': 'application/json',
          Authorization: '768bfb7a-087d-4ee1-8bb0-5498cc36ad46'
        },
        data: {
          chain: 'polygon',
          name: 'DLIB NFT',
          description: 'An NFT you earn at Decentralized Library',
          file_url: 'https://thumbs.dreamstime.com/b/conceptual-hand-writing-showing-well-done-concept-meaning-used-praising-demonstrating-group-something-have-good-way-young-142552626.jpg',
          mint_to_address: formInput.name
        }
      };

        axios.request(options).then(function (response) {
          console.log(response.data);
          alert("Your DLIB NFT have just been minted. Check your NFT on polygon explorer");
        }).catch(function (error) {
          console.error(error);
        });
       router.push('/')
 }

 return (
    <>
      <Navbar />
    <br />
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input 
          placeholder="Enter you Ethereum Wallet Address"
          className="mt-8 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
        />

        <button onClick={mintNFT} className="font-bold mt-4 bg-black text-white rounded p-4 shadow-lg">
          Mint you NFT
        </button>
      </div>
    </div>

    </>
  )
}