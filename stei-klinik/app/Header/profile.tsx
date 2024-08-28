import Link from "next/link";

export interface userprops {
    nama: string;
}

const Profile = ({nama}: userprops) => {
    return(
        <>
            <div className="flex">
                <img
                    src="/user.png"
                    alt="profile"
                    className="absolute top-0"
                    style={{ width: "auto", height: "auto", marginLeft:"890px", marginTop:"13px" }}
                />
                <p className="text-[#B4B4B4] font-bold text-[20px]" style={{marginLeft:"950px", marginTop:"23px"}}>{nama}Guest</p>
            </div>
            <Link href="/setting">
                <div>
                    <img
                        src="/gear.png"
                        alt="setting"
                        className="absolute top-0"
                        style={{ width: "auto", height: "auto", marginLeft:"1100px", marginTop:"14px" }}
                    />
                </div>
            </Link>
        </>
    )
}

export default Profile;