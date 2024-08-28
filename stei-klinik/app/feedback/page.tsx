import Link from "next/link"
import Emoji from "./emoji"

// function changeStatus(status: boolean): boolean {
//     let review = false;
//  }

// butuh function boolean untuk review, onclick untuk submit, bisa input untuk message --> hasil input masuk di database dev

export default function feedback () {
    return <body>
        <div className="overscroll-auto bg-[#ffffff] h-screen w-screen">
            <div className="text-black font-bold text-base text-[26px]" style={{marginLeft:"575px", marginTop:"20px"}}>STEI-KLINIK</div>
            <div className="text-black ml-[447px]">We’d love your feedback on the STEI-KLINIK experience</div>
            <div className="h-[390px] w-[610px] bg-[#DAEED5] rounded-[5px] ml-[358px] mt-[20px]">
                <p className="text-black font-bold text-[23px] absolute bottom-0" style={{marginLeft:"170px", marginBottom:"405px"}}>How's your experience?</p>
                <div className="grid grid-cols-6">
                    <Emoji gambar="/Angry.png" nama="Awful"/>
                    <Emoji gambar="/Frowning.png" nama="Bad"/>
                    <Emoji gambar="/Smiling.png" nama="Okay"/>
                    <Emoji gambar="/Beaming.png" nama="Good"/>
                    <Emoji gambar="/Heart.png" nama="Great"/>
                </div>
                <div className="h-[166px] w-[551px] bg-[#F2F4F5] rounded-[5px]" style={{marginLeft:"30px", marginTop:"40px"}}>
                    <p className="text-black" style={{marginLeft:"10px"}}>type a message</p>
                </div>
            </div>
            <div className="w-[180px] h-[38px] bg-[#016869] rounded-[10px]" style={{marginLeft:"560px", marginTop:"15px"}}>
                <p className="font-bold absolute bottom-0" style={{marginLeft:"22px", marginBottom:"17px"}}>Submit Feedback</p>
            </div>
            <Link href="/homepage">
                <p className="font-bold text-[#40A578] underline" style={{marginLeft:"577px", marginTop:"10px"}}>Back to Homepage</p>
            </Link>
        </div>
    </body>
}