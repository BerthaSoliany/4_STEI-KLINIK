import Navbar from "./navbar";
import Header from "../Header/logo";
import Pita from "../Header/pita";

export interface setprops {
  nama: string
}

export default function Setting ({nama} : setprops) {
  return (
    <body>
      <div className="overscroll-auto bg-[#ffffff] h-screen w-full">
      <Header/>
      <Pita judul="Ganti Password"/>
        <div className="flex">
          <div className="h-[370px] w-[350px] bg-[#DAEED5] absolute top-0" style={{marginTop:"220px", marginLeft:"800px"}}>
            <div className="pt-2">
              <div className="h-[50px] w-[290px] bg-[#40A578] mx-8 mt-14">
                <p className="font-bold text-base" style={{ marginLeft: "120px" }}>
                  {nama} nama
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <Navbar gambar="/icon_chat lines_.png" judul="ChatDokter" href="/chat-dokter" />
                <Navbar gambar="/icon_password_.png" judul="GantiPassword" href="/gantipassword" />
                <Navbar gambar="/logout.png" judul="Keluar" href="/logout" />
              </div>
            </div>
          </div>
          <div
            className="h-[100px] w-[100px] bg-[#F4F3F3] rounded-full absolute top-0"
            style={{ marginLeft: "925px", marginTop:"160px"}}
          ></div>
        </div>
      </div>
    </body>
  );
}
