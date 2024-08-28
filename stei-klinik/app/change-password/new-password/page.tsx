import Link from "next/link";
import Header from "../../Header/logo";
import Pita from "../../Header/pita";


export default function ChangePasswordNewPassword() {
    return <body>
        <div className="overscroll-auto bg-[#F9F9F9] h-screen w-screen">
            <Header/>
            <Pita judul="Ganti Password"/>
            <div className="w-[641px] h-[267px] rounded-[5px] bg-[#ffffff] absolute bottom-0" style={{marginLeft:"330px", marginBottom:"90px"}}>
                
                <div className=" flex items-center w-[372px]">
                    <div className="w-full max-w-2x1">
                    <input 
                        type="text" 
                        placeholder="Password Baru" 
                        className="w-full p-2 border rounded-[10px] border-[#B4B4B4] text-black" 
                        style={{marginLeft:"130px", marginTop:"60px"}}
                    />
                    </div>
                </div>
                
                <div className=" flex items-center w-[372px]">
                    <div className="w-full max-w-2x1">
                    <input 
                        type="text" 
                        placeholder="Konfirmasi Password" 
                        className="w-full p-2 border rounded-[10px] border-[#B4B4B4] text-black" 
                        style={{marginLeft:"130px", marginTop:"15px"}}
                    />
                    </div>
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