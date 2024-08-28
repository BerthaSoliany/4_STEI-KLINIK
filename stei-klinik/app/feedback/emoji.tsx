export interface EmojiProps {
    gambar: string;
    nama: string;
    isSelected: boolean; // To determine if the emoji is selected
    onClick: () => void; // Function to handle click events
}

const Emoji = ({ gambar, nama, isSelected, onClick }: EmojiProps) => {
    return (
        <div 
            className={`flex flex-col items-center cursor-pointer ${isSelected ? 'bg-[#DAEED5] shadow-lg' : ''}`} // Add background color/shadow if selected
            onClick={onClick}
            style={{ 
                padding: '10px', 
                borderRadius: '8px', 
                margin: '5px', // Adjust spacing between emojis
                position: 'relative', 
                left: '5px', // Move emoji to the right
                top: '15px' // Move emoji down
            }}
        >
            <img src={gambar} alt={nama} style={{ width: "36.81px", height: "36.81px" }} />
            <p className="text-black text-ms" style={{ marginTop: "5px" }}>{nama}</p>
        </div>
    );
}

export default Emoji;
