import React, { useEffect, useState }from 'react'
import { NftCollection } from './mock'
import NftCard from './NftCard';
import Pagination from '../components/Pagination';

export default function MarketPlace({initialNfts}) {
    const [nfts, setNfts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    useEffect(()=>{
        setNfts(initialNfts);
    }, []);
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = nfts.slice(indexOfFirstPost, indexOfLastPost);
 
    // Change page
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);
    return (
        <div>
            <div className="mt-8 grid grid-cols-3">
            {currentPosts.map(function(nft, idx){
                return (<NftCard nft={nft} key={idx} />)
            })}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={nfts.length}
                paginateBack={paginateBack}
                paginateFront={paginateFront}
                currentPage={currentPage}
            />
        </div>
        </div>
    )
}

export async function getServerSideProps(context) {

    const nftList = [...NftCollection((item) => item)];

    return {
        props: {
            initialNfts: nftList,
        },
    };
  }