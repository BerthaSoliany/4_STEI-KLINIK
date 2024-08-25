import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function setting() {
return <body>
    <div className="overscroll-auto bg-[#ffffff] h-screen w-screen">
      <div className="grid grid-cols-12 mb-3">
        <img src="/Logo.png" alt="logo klinik" className="mx-5 mt-5" style={{width:"auto", height:"auto"}}/>
        <img src="/STEI-KLINIK.png" alt="nama klinik" className="mt-11" style={{width:"auto", height:"auto"}}/>
      </div>
        <div className="flex-none w-screen h-[71px] bg-[#006769]">
            <div className="pt-[21.5px] px-10">
                <p className="text-[#FFFFFF] text-xl">Setting</p>
            </div>
        </div>
    </div>
</body>
}