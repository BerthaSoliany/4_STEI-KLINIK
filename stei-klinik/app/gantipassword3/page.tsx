import Link from "next/link";
import Header from "../Header/logo";
import Pita from "../Header/pita";


export default function gantipassword2() {
    return <body>
        <div className="overscroll-auto bg-[#F9F9F9] h-screen w-screen">
            <Header/>
            <Pita judul="Ganti Password"/>
            <div className="w-[771px] h-[345px] rounded-[5px] bg-[#ffffff] absolute bottom-0" style={{marginLeft:"260px", marginBottom:"30px"}}>
                <Link href="/home">
                    <img
                        src="/close.png"
                        alt="close"
                        className="absolute bottom-0"
                        style={{ width: "auto", height: "auto",marginLeft:"720px", marginBottom:"300px" }}
                    />
                </Link>
                <div className="w-[664px] h-[222px] bg-[#F2F9F3] border-[#40A578] border-[1px]" style={{marginLeft:"55px", marginTop:"80px"}}>
                    <p className="font-bold text-black absolute bottom-0 text-[24px]" style={{marginBottom:"140px", marginLeft:"180px"}}>Ganti Password Berhasil</p>
                </div>
            </div>
        </div>
    </body>
}