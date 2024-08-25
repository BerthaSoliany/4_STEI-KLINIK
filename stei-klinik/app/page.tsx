import Navbar from "./navbar";

export interface props {
  nama: string;
  nim: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function setting({nama, nim}: props) {
return <body>
    <div className="overscroll-auto bg-[#ffffff] h-screen w-auto">
      <div className="grid grid-cols-12 mb-1">
        <img src="/Logo.png" alt="logo klinik" className="mx-5 mt-1" style={{width:"auto", height:"auto"}}/>
        <img src="/STEI-KLINIK.png" alt="nama klinik" className="mt-7" style={{width:"auto", height:"auto"}}/>
      </div>
        <div className="flex-none w-1920 h-[43px] bg-[#006769]">
            <div className="pt-[8px] px-10">
                <p className="text-[#FFFFFF] text-xl">Setting</p>
            </div>
        </div>
        <div className="flex">
          <div className="h-[370px] w-[350px] bg-[#DAEED5] mt-14 mb-10 absolute right-0 mr-24">
            <div className="pt-2">
                <div className="h-[50px] w-[290px] bg-[#40A578] mx-8 mt-14">
                  <p className="font-bold text-base" style={{marginLeft:"120px"}}>{nama}nama</p>
                  <p className="text-xs" style={{marginLeft:"130px", marginTop:"4px"}}>{nim}NIM</p>
                </div>
                <div className="flex flex-col space-y-3">
                  <Navbar gambar="/icon_chat lines_.png" judul="ChatDokter"/>
                  <Navbar gambar="/date.png" judul="JanjiDokter"/>
                  <Navbar gambar="/icon_password_.png" judul="GantiPassword"/>
                  <Navbar gambar="/logout.png" judul="Keluar"/>
                </div>
            </div>
          </div>
          <div className="h-[100px] w-[100px] bg-[#F4F3F3] rounded-full absolute right-0 mt-3" style={{marginRight:"220px"}}></div>
        </div> 
    </div>
</body>
}