import React, {useEffect} from 'react'
import Link from 'next/link'
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";

export default function Navbar({user}) {
    
    const onWalletClick = () => {
        const connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org", // Required
            qrcodeModal: QRCodeModal,
          });
          
          // Check if connection is already established
          if (!connector.connected) {
            // create new session
            connector.createSession();
          }
    }
    useEffect(() => {
        if (typeof window === 'undefined') {
            global.window = {}
        }
    })
    return (
        <nav className="flex bg-gray-200 justify-between p-6 items-center py-4">
            <p className="text-2xl font-bold text-grey-800">ViGeeArt</p>
            <Link href='/'>
                Home
            </Link>
            <Link href='/MarketPlace'>
                Market Place
            </Link>
            <Link href='/Faqs'>
                FAQs
            </Link>
            <Link href='/MintNftForm'>
                Mint Nft
            </Link>
            <Link href='/AlgorandWallet'>
                My Wallet
            </Link>
            <div>
                {
                    user && <div>
                    <Link href='/api/auth/logout'>
                        <a className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mx-4">
                        Logout
                        </a>
                    </Link>
                    
                    {/* <div classNmae="bg-gradient-to-r from-black to-gray">
                        
                    </div> */}
                   
                    <a className="rounded bg-black hover:bg-gray text-white py-2 px-4" onClick={onWalletClick}>
                        Algorand Wallet
                    </a>
                    </div>
                    
                }
                {
                    !user && 
                    <Link href='/api/auth/login'>
                        <a className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
                        Login
                        </a>
                    </Link>
                }  
            </div>
        </nav>
    )
}

export async function getServerSideProps(context) {

    let todos = [];
    if (session?.user) {
        todos = await table
            .select({ filterByFormula: `userId = '${session.user.sub}'` })
            .firstPage();
    }
    return {
        props: {
            initialTodos: minifyRecords(todos),
        },
    };
  }