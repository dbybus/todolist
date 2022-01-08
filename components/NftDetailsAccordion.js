import React from 'react'

export default function NftDetailsAccordion({description, toggle, name, toggleFAQ}) {
    return (
        <div className="mb-2">
            <div className={`font-medium ${!toggle ? "rounded-sm" : "rounded-b-sm"} text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black rounded-xl bg-white hover:bg-white}`} onClick={toggleFAQ}>
                <div className="flex-auto">{name}</div>
                <div className="px-2 mt-1">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up w-5 h-5">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            {
                toggle && <div className="p-2 text-justify text-left text-gray-800 mb-5 bg-white">{description}</div>
            }
            
        </div>
    )
}
