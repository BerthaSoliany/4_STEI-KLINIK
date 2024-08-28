import Link from "next/link";


export default function gantipassword2() {
    return <body>
        <div className="overscroll-auto bg-[#F9F9F9] h-screen w-screen">
            <div className="w-[641px] h-[267px] rounded-[5px] bg-[#ffffff] absolute bottom-0" style={{marginLeft:"330px", marginBottom:"120px"}}>
                <div className="w-[372px] h-[37px] rounded-[10px] border-[#B4B4B4] border-[1px]" style={{marginLeft:"130px", marginTop:"60px"}}>
                    <p className="text-[#D9D9D9] text-[13px]" style={{marginTop:"9px", marginLeft:"13px"}}>Password lama</p>
                </div>
                <div className="w-[372px] h-[37px] rounded-[10px] border-[#B4B4B4] border-[1px]" style={{marginLeft:"130px", marginTop:"20px"}}>
                    <p className="text-[#D9D9D9] text-[13px]" style={{marginTop:"9px", marginLeft:"13px"}}>Password lama</p>
                </div>
                <Link href="/home">
                    <p className="text-black underline text-[14px]" style={{marginLeft:"130px", marginTop:"25px"}}>Cancel & Go Back</p>
                </Link>
                <Link href="/gantipassword3">
                    <img
                        src="/Rectangle 114.png"
                        alt="kotak"
                        className="absolute bottom-0"
                        style={{ width: "auto", height: "auto",marginLeft:"396px", marginBottom:"60px" }}
                    />
                    <p className="font-bold absolute bottom-0 text-[14px]" style={{marginLeft:"417px", marginBottom:"65px"}}>Continue</p>
                </Link>
            </div>
        </div>
    </body>
}