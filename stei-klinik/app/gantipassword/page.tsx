import Link from "next/link";
import Header from "../Header/logo";

// buat header yg pita ijo

export default function gantipassword() {
    return <body>
        <div className="overscroll-auto bg-[#F9F9F9] h-screen w-screen">
            <Header/>
            <div className="w-[641px] h-[267px] rounded-[5px] bg-[#ffffff] absolute bottom-0" style={{marginLeft:"330px", marginBottom:"120px"}}>
                <p className="text-black text-[14px]" style={{marginLeft:"80px", marginTop:"70px"}}>Silakan masukkan password kamu saat ini untuk menjaga keamanan akun</p>

                <div className=" flex items-center w-[372px]">
                    <div className="w-full max-w-2x1">
                    <input 
                        type="text" 
                        placeholder="Password Lama" 
                        className="w-full p-2 border rounded-[10px] border-[#B4B4B4] text-black" 
                        style={{marginLeft:"130px", marginTop:"15px"}}
                    />
                    </div>
                </div>

                <Link href="/home">
                    <p className="text-black underline text-[14px]" style={{marginLeft:"130px", marginTop:"25px"}}>Cancel & Go Back</p>
                </Link>
                <Link href="/gantipassword2">
                    <img
                        src="/Rectangle 114.png"
                        alt="kotak"
                        className="absolute bottom-0"
                        style={{ width: "auto", height: "auto",marginLeft:"396px", marginBottom:"70px" }}
                    />
                    <p className="font-bold absolute bottom-0 text-[14px]" style={{marginLeft:"417px", marginBottom:"75px"}}>Continue</p>
                </Link>
            </div>
        </div>
    </body>
}