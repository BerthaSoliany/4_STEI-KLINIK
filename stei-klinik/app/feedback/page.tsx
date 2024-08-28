"use client";

import { useState } from "react";
import Link from "next/link";
import Emoji from "./emoji";

export default function Feedback() {
    const [selectedEmoji, setSelectedEmoji] = useState(""); // To store the selected emoji
    const [message, setMessage] = useState(""); // To store the typed message

    const handleEmojiClick = (emoji: string) => {
        setSelectedEmoji(emoji); // Set the selected emoji as the review
    };

    const handleSubmit = () => {
        if (selectedEmoji && message) {
            console.log("Feedback submitted:", { review: selectedEmoji, message });

            // Clear the feedback form after submission
            setSelectedEmoji("");
            setMessage("");
        } else {
            alert("Please select an emoji and type a message.");
        }
    };

    return (
        <div className="overscroll-auto bg-[#ffffff] h-screen w-screen">
            <div className="text-black font-bold text-base text-[26px]" style={{ marginLeft: "575px", marginTop: "20px" }}>
                STEI-KLINIK
            </div>
            <div className="text-black ml-[447px]">
                We’d love your feedback on the STEI-KLINIK experience
            </div>
            <div className="h-[390px] w-[610px] bg-[#DAEED5] rounded-[5px] ml-[358px] mt-[20px] relative">
    
                <div className="grid grid-cols-5 gap-4">
                    <Emoji gambar="/Angry.png" nama="Awful" isSelected={selectedEmoji === "Awful"} onClick={() => handleEmojiClick("Awful")} />
                    <Emoji gambar="/Frowning.png" nama="Bad" isSelected={selectedEmoji === "Bad"} onClick={() => handleEmojiClick("Bad")} />
                    <Emoji gambar="/Smiling.png" nama="Okay" isSelected={selectedEmoji === "Okay"} onClick={() => handleEmojiClick("Okay")} />
                    <Emoji gambar="/Beaming.png" nama="Good" isSelected={selectedEmoji === "Good"} onClick={() => handleEmojiClick("Good")} />
                    <Emoji gambar="/Heart.png" nama="Great" isSelected={selectedEmoji === "Great"} onClick={() => handleEmojiClick("Great")} />
                </div>
                <div className="h-[166px] w-[551px] bg-[#F2F4F5] rounded-[5px]" style={{ marginLeft: "30px", marginTop: "40px" }}>
                    <textarea
                        id="messageInput"
                        className="w-full h-[140px] bg-transparent outline-none p-2 text-black"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your feedback here..."
                    />
                </div>
            </div>
            <div
                className="w-[180px] h-[38px] bg-[#016869] rounded-[10px] flex items-center justify-center cursor-pointer"
                style={{ marginLeft: "560px", marginTop: "15px" }}
                onClick={handleSubmit}
            >
                <p className="font-bold text-white">Submit Feedback</p>
            </div>
            <Link href="/home">
                <p className="font-bold text-[#40A578] underline" style={{ marginLeft: "577px", marginTop: "10px" }}>
                    Back to Homepage
                </p>
            </Link>
        </div>
    );
}
