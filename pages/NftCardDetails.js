import React, {useState, useEffect} from 'react'
import { withRouter } from 'next/router'
import { NftCollection } from './mock'
import NftDetailsAccordion from '../components/NftDetailsAccordion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd, faWallet } from '@fortawesome/free-solid-svg-icons'

function NftCardDetails(props) {
    const [nfts, setNfts] = useState([]);
    const [nft, setNft] = useState(null);
    const [loading, setLoading] = useState(false);
    const [descriptionToggle, setDescriptionToggle] = useState(false);

    useEffect(()=>{
        const nftList = [...NftCollection((item) => item)];
        setNfts(nftList);
        const findNft = nfts.find(nft => nft.properties.image_integrity === props.router.query.id);
        setNft(findNft)

        setLoading(true);
    }, [loading])

    const toggleFAQ = () => {
        setDescriptionToggle(!descriptionToggle)
    }
    return (
        <div className="container bg-gray-100 mt-8 mb-6">
            {nft && 
            <div className="grid grid-rows-2 grid-cols-6 gap-10 p-10">
                <div className="row-span-2 col-span-2 justify-center items-center ...">
                    <div className="flex justify-center items-center">
                        <img src={nft.properties.image} className='w-6/7 h-96 rounded-xl'/>
                    </div>
                    <NftDetailsAccordion description={nft.properties.description} name="Description" toggle={descriptionToggle} toggleFAQ={toggleFAQ}/>
                    <NftDetailsAccordion description={nft.properties.description} name="About author" />
                    <NftDetailsAccordion description={nft.properties.description} name="Details" /> 
                </div>
              
                <div className="row-span-1 col-span-4 ..."><h4 className="text-2xl font-medium leading-tight mt-0 mb-2">{nft.properties.name}</h4>
                <div className="relative mb-2">Owned by Deemz</div>
                <div className="w-6/12 pb-2 bg-white rounded-xl shadow-xl p-5 z-10">
                        <div >
                            Sale ends July 6, 2022 at 8:29pm CET 
                        </div>
                        <div className="text-gray-500">
                            Current price 
                        </div>
                        <div className="flex flex-wrap py-3 items-center">
                            <img src={"/static/images/algorand-algo-logo.svg"} className='w-6' alt="this is car image" />
                            <div className="relative text-2xl px-3">
                                0.01 
                            </div>
                        </div>
                        <div className="flex flex-wrap py-5 items-center">
                            
                                <button className="rounded flex flex-row items-center content-center justify-start gap-2 h-sm bg-blue-500 hover:bg-blue-600 text-white w-40 py-2 px-4">
                                    <FontAwesomeIcon icon={faWallet} />
                                    Buy
                                </button>
                                <button className="rounded rounded flex flex-row items-center content-center justify-start gap-2 border-2 border-blue-500 text-blue-500 active:border-blue-600 active:text-blue-600 active:bg-blue-50 w-40 py-2 px-4 mx-4">
                                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                                    Bid
                                </button>
                        
                        </div>
                    </div>
                </div>
                <div className="row-span-1 col-span-4 ...">
                    <NftDetailsAccordion description={nft.properties.description} name="Price History" />
                    <NftDetailsAccordion description={nft.properties.description} name="Listings" />
                    <NftDetailsAccordion description={nft.properties.description} name="Offers"  />
                </div>      
            </div>}
        </div>
    )
}
export default withRouter(NftCardDetails)