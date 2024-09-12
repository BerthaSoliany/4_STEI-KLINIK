import React, {useState} from 'react'
import Image from "next/image";
import Link from 'next/link';

export interface ChatmodalProps {
    chatmodal: string
    open: boolean
    onClose : boolean
}

export default function Chatmodal({chatmodal, open, onClose} : ChatmodalProps) {
    if (!open) return null

    return (
        <>
            <div className='fixed inset-0 w-screen h-screen opacity-20 bg-black z-10'>'     
            </div>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF]  rounded-[10px] z-20 w-5/6 h-2/4 flex flex-col items-center'>
                <div className='fixed top-4 right-6'>
                    <button onClick={onClose}>
                        <Image
                            className=''
                            src="/close.png"
                            width={16}
                            height={16}
                            alt="close"
                        />
                    </button>
                </div>
                <div className='mt-12 ml-6  bg-[#f3faf3] border-[#40A578] border-[1px] h-2/3 w-5/6 flex items-center flex-col justify-center items-center'>
                    <Image
                        className='mt-2'
                        src="/whatsapp.png"
                        width={100}
                        height={100}
                        alt="whatsapp logo"
                    />
                    <pre className='flex font-bold p-2 text-black justify-center'>Chat akan dialihkan ke WhatsApp</pre>
                </div>
                <Link href={chatmodal} rel="noopener noreferrer" target="_blank" className='text-[#016869] font-bold border-[#40A578] border-[1px] p-2 m-2'>YES</Link>     
            </div>       
        </>
    )
}