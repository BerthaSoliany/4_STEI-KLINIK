import Link from "next/link";

const Header = () => {
    return(
        <>
            <Link href="/home">
                <div>
                    <img
                        src="/Logo.png"
                        alt="logo klinik"
                        className="absolute top-0"
                        style={{ width: "auto", height: "auto", marginLeft:"20px", marginTop:"7px" }}
                    />
                    <img
                        src="/STEI-KLINIK.png"
                        alt="nama klinik"
                        className="absolute top-0"
                        style={{ width: "auto", height: "auto", marginTop:"24px", marginLeft:"85px" }}
                    />
                </div>
            </Link>
        </>
    )
}

export default Header;