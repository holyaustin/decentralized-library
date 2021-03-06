import router from 'next/router';
import { React } from 'react';
import Navbar from '../components/navbar';
import actions from '../data/myindex';
import Image from 'next/image'
import banner from '../images/l1.jpg'
//import '../public/ceramic.css';
import { ThreeIdConnect, EthereumAuthProvider } from '@3id/connect'




// eslint-disable-next-line no-unused-vars
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {

  async function Connect() {
    const threeIdConnect = new ThreeIdConnect()
    const addresses = await window.ethereum.enable()
    
    const authProvider = new EthereumAuthProvider(window.ethereum, addresses[0])
    
    await threeIdConnect.connect(authProvider)
    // await threeIdConnect.connect(authProvider)
    const provider = await threeIdConnect.getDidProvider()
    const didProvider = await threeIdConnect.getDidProvider()
    
  }




  return (
    <>
    
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
        <br />
        <div> 
        <Image 
          src={banner}
          alt="Decentralized Library"
          height={450} //automatically provided
        //width={1360}
        />

      </div> 

        <div className="md:items-center">
          <center>
            <br />
            <h2 className="text-6xl font-bold leading-1 text-black-900 sm:text-5xl hover:opacity-25">Welcome to Decentralized Library</h2>
            <br />
            <h2 className="text-3xl leading-7 text-black sm:text-xl sm:truncate hover:opacity-25">
            No political censorship, No Restriction to Knowledge 
              {' '}
              <br />
              Read, Learn and Earn!!!
            </h2>
            <br />
            <br />
          </center>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {actions.map((person) => (
            <div
              key={person.name}
              className="relative rounded-lg border-2 border-gray-700 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:bg-red-200 focus-within:ring-6 focus-within:ring-offset-6 focus-within:ring-indigo-900"
            >
              <div className="flex-shrink-0">
                <person.icon className="h-12 w-12" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0 ">
                <a
                  className="focus:outline-none text-center "
                  onClick={() => { router.push(person.href); }}
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-lg font-medium text-gray-900">{person.name}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div className="flex-1 min-w-0 ">
          <center>
          <button onClick={Connect} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Connect wallet
          </button>

      </center>
      </div>
        <br />
      </div>
    </>
  );
}
