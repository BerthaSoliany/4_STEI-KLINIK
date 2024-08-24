"use client";

import React, {useState} from 'react'
import Chatmodal from './chatmodal';

export interface ChatlinkProps {
    chatlink: string
}

const Chatlink = ({chatlink}: ChatlinkProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <div>
                <button onClick={() => setIsOpen(true)} className="text-black text-xs bg-[#E6ff94] rounded-[5px] py-1 px-2 drop-shadow-md">Chat</button>

                <Chatmodal chatmodal={chatlink} open={isOpen} onClose={() => setIsOpen(false)}/>
            </div>
        </>
    );
};

export default Chatlink;