import Link from "next/link";

const Footerhome = () => {
    return(
        <div className="min-height w-full h-[142px] bg-[#9DDE8B] flex flex-col items-center">
            <p className="text-[#006769] text-[16px] m-4">Tell us about the positive moments you've had with us!</p>
            <Link href="/feedback">
                <div className="flex items-center justify-center relative m-2">
                    <div className="w-[119px] h-[40px] rounded-[10px] bg-[#006769] text-center font-bold"></div>
                    <p className="absolute">Feedback</p>
                </div>
            </Link>
            <div className="flex">
                <p className="text-black text-[16px] font-bold" style={{marginTop:"3px"}}>STEI-KLINIK</p>
                <Link href="https://web.facebook.com/profile.php?id=6156494499538">
                    <img
                        src="/facebook.png"
                        alt="fb"
                        className=""
                        style={{width:"auto", height:"auto", marginLeft:"10px"}}
                    />
                </Link>
                <Link href="https://www.instagram.com/stei.klinik_/">
                    <img
                        src="/instagram.png"
                        alt="ig"
                        className=""
                        style={{width:"auto", height:"auto", marginLeft:"5px", marginTop:"1px"}}
                    />
                </Link>
                <Link href="https://x.com/steiklinik">
                    <img
                        src="/twitter.png"
                        alt="twt"
                        className=""
                        style={{width:"auto", height:"auto", marginLeft:"6px", marginTop:"3px"}}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Footerhome;