import Link from "next/link";

const Footerbiasa = () => {
    return(
        <div className="min-height w-full h-[60px] bg-[#9DDE8B]">
            <div className="flex" style={{marginLeft:"50px", marginTop:"17px"}}>
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

export default Footerbiasa;