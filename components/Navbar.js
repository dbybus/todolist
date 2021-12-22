import React from 'react'
import Link from 'next/link'


export default function Navbar({user}) {
    return (
        <nav className="flex bg-gray-200 justify-between p-6 items-center py-4">
            <p className="text-2xl font-bold text-grey-800">ViGeeArt</p>
            <Link href='/'>
                Home
            </Link>
            <Link href='/MarketPlace'>
                Market Place
            </Link>
            <Link href='/'>
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
                    <div>
                    
  
                    
                    
                    </div>
                    
                }
                {
                    user && <div>
                    <Link href='/api/auth/logout'>
                        <a className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">
                        Logout
                        </a>
                    </Link>
                    
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
