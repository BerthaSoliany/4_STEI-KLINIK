import Link from "next/link";

export interface emjProps {
    gambar: string;
    nama: string;
    href: string;
}

const Emoji= ({gambar, nama, href}:emjProps) => {
    return(
        <nav>
            <Link href={href}>
                <div className="grid grid-cols">
                    <img src={gambar} alt={nama} style={{width:"36.81px", height:"36.81px", marginLeft:"80px", marginTop:"60px"}}/>
                    <p className="text-black text-ms" style={{marginLeft:"78px"}}>{nama}</p>
                </div>
            </Link>
        </nav>
    )
}

export default Emoji;