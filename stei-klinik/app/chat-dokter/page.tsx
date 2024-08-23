import Boxdokter from "./boxdokter";
import Boxminggu from "./boxminggu";

export default function Chatdokter() {
return <body>
<div className="overscroll-auto bg-[#ffffff]">
    <div className="mb-[107px]"></div>
    <div className="flex-none w-screen h-[71px] bg-[#006769] m-0">
        <div className="pt-[21.5px] px-10">
            <p className="text-[#FFFFFF] text-xl">Jadwal Chat Dokter</p>
        </div>
    </div>
    <div className="flex-none overscroll-auto m-0">
        <div className="pt-8"></div>
        <div className="p-[65px]">
            <div className="flex flex-row space-x-10  place-content-center">
                <div className="flex flex-col space-y-10">
                    <Boxminggu minggu="Minggu ke - 1" />
                    <Boxdokter nama="Dr. Riris" dokter="Dokter Umum" nomor="0812 1024 4392" />
                    <Boxdokter nama="Drg. Wiwi" dokter="Dokter Gigi" nomor="0812 2009 0709" />
                </div>
                <div className="flex flex-col space-y-10">
                    <Boxminggu minggu="Minggu ke - 2" />
                    <Boxdokter nama="Dr. Melly" dokter="Dokter Umum" nomor="0813 1010 6853" />
                    <Boxdokter nama="Dr. Yunita" dokter="Dokter Umum" nomor="0813 997 6064" />
                </div>
                <div className="flex flex-col space-y-10">
                    <Boxminggu minggu="Minggu ke - 3" />
                    <Boxdokter nama="Dr. Riris" dokter="Dokter Umum" nomor="0812 1024 4392" />
                    <Boxdokter nama="Drg. Wiwi" dokter="Dokter Gigi" nomor="0812 2009 0709" />
                </div>
                <div className="flex flex-col space-y-10">
                    <Boxminggu minggu="Minggu ke - 4" />
                    <Boxdokter nama="Dr. Mei Ria" dokter="Dokter Umum" nomor="0812 8559 9237" />
                </div>
            </div>
            <div className="w-[480px] ml-[240px] mt-6">
                <pre className="text-sm font-bold text-[#006769] text-wrap">Note: Berikut adalah jadwal chat per minggu. Silahkan chat sesuai jadwal
                yang telah ditentukan. Jika ingin mengirim pesan di luar jadwal, maka pesan
                tidak akan dibalas oleh dokter.
                </pre>
            </div>
        </div>
    </div>
</div>
</body>

    
}