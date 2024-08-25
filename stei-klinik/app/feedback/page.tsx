import Emoji from "./emoji"

export default function feedback () {
    return <body>
        <div className="overscroll-auto bg-[#ffffff] h-screen w-screen">
            <div className="text-black font-bold text-base text-[25px]" style={{marginLeft:"575px", marginTop:"20px"}}>STEI-KLINIK</div>
            <div className="text-black ml-[445px]">We’d love your feedback on  the STEI-KLINIK experience</div>
            <div className="h-[390px] w-[610px] bg-[#DAEED5] rounded-[5px] ml-[355px] mt-[20px]">
                <p className="text-black font-bold text-[20px]" style={{marginLeft:"185px"}}>How's your experience?</p>
                <div className="grid grid-cols-6">
                    <Emoji gambar="/Angry.png" nama="Awful" href=""/>
                    <Emoji gambar="/Frowning.png" nama="Bad" href=""/>
                    <Emoji gambar="/Smiling.png" nama="Okay" href=""/>
                    <Emoji gambar="/Beaming.png" nama="Good" href=""/>
                    <Emoji gambar="/Heart.png" nama="Great" href=""/>
                </div>
                <div className="h-[166px] w-[551px] bg-[#F2F4F5] rounded-[5px]" style={{marginLeft:"30px", marginTop:"40px"}}>
                    <p className="text-black" style={{marginLeft:"10px"}}>type a message</p>
                </div>
            </div>
            <div className="w-[180px] h-[38px] bg-[#016869] rounded-[10px]" style={{marginLeft:"555px", marginTop:"15px"}}>
                <p className="font-bold absolute bottom-0" style={{marginLeft:"22px", marginBottom:"17px"}}>Submit Feedback</p>
            </div>
            <p className="font-bold text-black" style={{marginLeft:"572px", marginTop:"10px"}}>Back to Homepage</p>
        </div>
    </body>
}