import Boxdokter from "./boxdokter";
import Boxminggu from "./boxminggu";


export default function Chatdokter() {
return <body>
    <div className="overscroll-auto bg-[#ffffff] h-screen">
        <div className="mb-[107px]"></div>
        <div className="flex-none w-screen h-[71px] bg-[#006769] m-0">
            <div className="pt-[21.5px] px-10">
                <p className="text-[#FFFFFF] text-xl">Jadwal Chat Dokter</p>
            </div>
        </div>
        <div className="flex-none overscroll-auto m-0">
            <div className="pt-8"></div>
            <div className="p-[65px] bg-[#ffffff]">
                <div className="flex flex-wrap flex-row space-x-10  place-content-center">
                    <div className="flex flex-col space-y-10">
                        <div className="h-14"></div>
                        <div className="text-xs font-bold text-[#006769] whitespace-pre-wrap w-40">
                            <ul className="list-none">
                                <li>Shift 1</li>
                                <li>    </li>
                                <li>Senin     : 08:00 - 13:00</li>
                                <li>Selasa   : 13:00 - 18:00</li>
                                <li>Rabu      : 18:00 - 21:00</li>
                                <li>Kamis    : 08:00 - 13:00</li>
                                <li>Jumat    : 13:00 - 18:00</li>
                                <li>Sabtu     : 18:00 - 21:00</li>
                                <li>Minggu : 08:00 - 14:00</li>
                            </ul>
                        </div>
                        <div className="text-xs font-bold text-[#006769] whitespace-pre-wrap">
                            <ul className="list-none">
                                <li>Shift 2</li>
                                <li>    </li>
                                <li>Senin     : 18:00 - 21:00</li>
                                <li>Selasa   : 13:00 - 18:00</li>
                                <li>Rabu      : 08:00 - 13:00</li>
                                <li>Kamis    : 18:00 - 21:00</li>
                                <li>Jumat    : 13:00 - 18:00</li>
                                <li>Sabtu     : 08:00 - 13:00</li>
                                <li>Minggu : 14:00 - 21:00</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-0">
                        <Boxminggu minggu="Minggu ke - 1" />
                        <Boxdokter nama="Dr. Riris" dokter="Dokter Umum" nomor="0812 1024 4392" chatlink='https://wa.me/6281210244392'/>
                        <Boxdokter nama="Drg. Wiwi" dokter="Dokter Gigi" nomor="0812 2009 0709" chatlink='https://wa.me/6281220090709'/>
                    </div>
                    <div className="flex flex-col space-y-0">
                        <Boxminggu minggu="Minggu ke - 2" />
                        <Boxdokter nama="Dr. Melly" dokter="Dokter Umum" nomor="0813 1010 6853" chatlink='https://wa.me/62081310106853'/>
                        <Boxdokter nama="Dr. Yunita" dokter="Dokter Umum" nomor="0813 997 6064" chatlink='https://wa.me/6208139976064'/>
                    </div>
                    <div className="flex flex-col space-y-0">
                        <Boxminggu minggu="Minggu ke - 3" />
                        <Boxdokter nama="Dr. Riris" dokter="Dokter Umum" nomor="0812 1024 4392" chatlink='https://wa.me/62081210244392'/>
                        <Boxdokter nama="Drg. Wiwi" dokter="Dokter Gigi" nomor="0812 2009 0709" chatlink='https://wa.me/62081220090709'/>
                    </div>
                    <div className="flex flex-col space-y-0">
                        <Boxminggu minggu="Minggu ke - 4" />
                        <Boxdokter nama="Dr. Mei Ria" dokter="Dokter Umum" nomor="0812 8559 9237" chatlink='https://wa.me/62081285599237'/>
                        <div className="text-sm font-bold text-[#006769] whitespace-pre-wrap w-[298px]">
                            <p>Note: Untuk Minggu ke-4 jam operasional dimulai pada pukul 08:00 - 21:00 setiap hari</p>
                        </div>
                    </div>
                </div>
                <div className="text-sm font-bold text-[#006769] whitespace-pre-wrap w-[600px] p-4 pl-36">
                    <p>Note : Berikut adalah jadwal chat per minggu. Silakan chat sesuai jadwal yang telah ditentukan. Jika mengirim pesan di luar jadwal, maka pesan tidak akan dibalas oleh dokter.</p>
                </div>
            </div>
        </div>
    </div>
</body> 
}