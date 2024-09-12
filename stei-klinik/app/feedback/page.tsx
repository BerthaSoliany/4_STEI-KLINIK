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
        <div className="bg-white flex flex-col items-center justify-center h-screen space-y-2 p-4">
            <div className="text-black">
                We’d love your feedback on the STEI-KLINIK experience
            </div>
            <div className="bg-[#DAEED5] rounded-xl flex flex-col justify-center items-center space-y-4 p-4 container">
    
                <div className="grid grid-cols-5 gap-4 place-items-center">
                    <Emoji gambar="/Angry.png" nama="Awful" isSelected={selectedEmoji === "Awful"} onClick={() => handleEmojiClick("Awful")} />
                    <Emoji gambar="/Frowning.png" nama="Bad" isSelected={selectedEmoji === "Bad"} onClick={() => handleEmojiClick("Bad")} />
                    <Emoji gambar="/Smiling.png" nama="Okay" isSelected={selectedEmoji === "Okay"} onClick={() => handleEmojiClick("Okay")} />
                    <Emoji gambar="/Beaming.png" nama="Good" isSelected={selectedEmoji === "Good"} onClick={() => handleEmojiClick("Good")} />
                    <Emoji gambar="/Heart.png" nama="Great" isSelected={selectedEmoji === "Great"} onClick={() => handleEmojiClick("Great")} />
                </div>
                <div className="bg-[#F2F4F5] rounded-[5px]">
                    <textarea
                        id="messageInput"
                        className="w-80 h-40 bg-transparent outline-none p-2 text-black"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your feedback here..."
                    />
                </div>
            </div>
            <button className="text-gray-100 bg-[#016869] rounded-md p-2 px-4 font-bold" onClick={handleSubmit}>Submit Feedback</button>
            <Link href="/home">
                <p className="text-[#40A578] underline">
                    Back to Homepage
                </p>
            </Link>
        </div>
    );
}
