import Link from "next/link";

export interface navProps {
    gambar: string;
    judul: string;
    href: string; // Add href prop
}

const Navbar = ({ judul, gambar, href }: navProps) => {
    return (
        <nav className="border-[1px] border-[#006769] rounded-[10px] h-[40px] w-[290px] mt-5 bg-[#ffffff]" style={{ marginLeft: "33px" }}>
            <Link href={href}> {/* Use the href prop */}
                <div className="grid grid-cols-11">
                    <img src={gambar} alt={judul} style={{ width: "23px", height: "23px", marginLeft: "20px", marginTop: "7px" }} />
                    <p className="text-black" style={{ marginLeft: "40px", marginTop: "8px" }}>{judul}</p>
                </div>
            </Link>
        </nav>
    )
}

export default Navbar;
