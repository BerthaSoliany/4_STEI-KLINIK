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
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] w-[700px] h-[360px] rounded-[10px] z-20'>
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
                <div className='mt-12 ml-6 w-[650px] h-[250px] bg-[#f3faf3] border-[#40A578] border-[1px]'>
                    <pre className='flex text-2xl font-bold text-black justify-center pt-[100px]'>Chat akan dialihkan ke WhatsApp</pre>
                </div>
                <div className='fixed border-[#40A578] border-[1px] right-[26px] bottom-4 pt-1 pb-1 pl-8 pr-8'>
                    <Link href={chatmodal} rel="noopener noreferrer" target="_blank" className='text-[#016869] font-bold'>YES</Link>     
                </div>
            </div>       
        </>
    )
}