import Link from "next/link";

const Footerhome = () => {
    return(
        <div className="min-height w-full h-[142px] bg-[#9DDE8B]">
            <p className="text-[#006769] text-[16px]" style={{marginTop:"30px", marginLeft:"435px"}}>Tell us about the positive moments you've had with us!</p>
            <Link href="/feedback">
                <div className="flex">
                    <div className="w-[119px] h-[40px] rounded-[10px] bg-[#006769]" style={{marginLeft:"570px", marginTop:"10px"}}></div>
                    <p className="text-[16px] font-bold" style={{marginLeft:"-97px", marginTop:"17px"}}>Feedback</p>
                </div>
            </Link>
            <div className="flex" style={{marginLeft:"50px"}}>
                <p className="text-black text-[16px] font-bold" style={{marginTop:"3px"}}>STEI-KLINIK</p>
                <Link href="/">
                    <img
                        src="/facebook.png"
                        alt="fb"
                        className=""
                        style={{width:"auto", height:"auto", marginLeft:"10px"}}
                    />
                </Link>
                <Link href="/">
                    <img
                        src="/instagram.png"
                        alt="ig"
                        className=""
                        style={{width:"auto", height:"auto", marginLeft:"5px", marginTop:"1px"}}
                    />
                </Link>
                <Link href="/">
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