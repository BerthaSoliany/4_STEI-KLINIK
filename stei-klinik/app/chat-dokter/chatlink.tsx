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
                <button onClick={() => setIsOpen(true)} className="bg-[#006769] rounded-[5px] py-1 px-4 font-bold">chat</button>

                <Chatmodal chatmodal={chatlink} open={isOpen} onClose={() => setIsOpen(false)}/>
            </div>
        </>
    );
};

export default Chatlink;