import Boxdokter from "./boxdokter";
import Boxminggu from "./boxminggu";
import Logo from '@/public/Logo.png'
import Image from "next/image";
import Header from "../Header/logo";

export default function Chatdokter() {
return <body>
    <div className="bg-white">
        <div className="flex justify-between items-center bg-white p-4 shadow-md h-20">
            <Header/>
        </div>
        <div className="flex justify-between h-[71px] bg-[#006769] m-0">
            <div className="flex justify-center items-center px-10">
                <p className="text-[#FFFFFF] text-xl">Jadwal Chat Dokter</p>
            </div>
            <div className="flex space-x-4 pr-10">
                    <button className="bg-[#006769] text-white px-4 py-2 hover:bg-white hover:text-[#006769] hover:transition">
                        Login
                    </button>
                    <button className="bg-[#006769] text-white px-4 py-2 hover:bg-white hover:text-[#006769] transition">
                        Sign Up
                    </button>
            </div>
        </div>
        <div className="text-sm text-[#006769] text-center p-4 font-bold">
        Berikut adalah jadwal chat per minggu. Silakan chat sesuai jadwal yang telah ditentukan. Jika mengirim pesan di luar jadwal, maka pesan tidak akan dibalas oleh dokter.
        </div>
        <div className="flex flex-row space-x-10 m-2 items-center justify-center">
                        <div className="h-14"></div>
                        <div className="text-xs font-semibold text-[#006769] whitespace-pre-wrap w-40">
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
                        <div className="text-xs font-semibold text-[#006769] whitespace-pre-wrap ">
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
        <div className="flex flex-row justify-center items-center mt-8">
            <div className="flex flex-row space-x-4 flex-wrap justify-center items-start">
                <div className="flex flex-col space-y-0">
                    <Boxminggu minggu="Minggu ke - 1" aktif={false}/>
                    <Boxdokter nama="Dr. Riris" dokter="Dokter Umum" nomor="0812 1024 4392" chatlink='https://wa.me/6281210244392'/>
                    <Boxdokter nama="Drg. Wiwi" dokter="Dokter Gigi" nomor="0812 2009 0709" chatlink='https://wa.me/6281220090709'/>
                </div>
                <div className="flex flex-col space-y-0">
                    <Boxminggu minggu="Minggu ke - 2" aktif={false}/>
                    <Boxdokter nama="Dr. Melly" dokter="Dokter Umum" nomor="0813 1010 6853" chatlink='https://wa.me/62081310106853'/>
                    <Boxdokter nama="Dr. Yunita" dokter="Dokter Umum" nomor="0813 997 6064" chatlink='https://wa.me/6208139976064'/>
                </div>
                <div className="flex flex-col space-y-0">
                    <Boxminggu minggu="Minggu ke - 3" aktif={false}/>
                    <Boxdokter nama="Dr. Riris" dokter="Dokter Umum" nomor="0812 1024 4392" chatlink='https://wa.me/62081210244392'/>
                    <Boxdokter nama="Drg. Wiwi" dokter="Dokter Gigi" nomor="0812 2009 0709" chatlink='https://wa.me/62081220090709'/>
                </div>
                <div className="flex flex-col space-y-0">
                    <Boxminggu minggu="Minggu ke - 4" aktif={true}/>
                    <Boxdokter nama="Dr. Mei Ria" dokter="Dokter Umum" nomor="0812 8559 9237" chatlink='https://wa.me/62081285599237'/>
                </div>
            </div>
        </div>
        <div className="text-sm text-[#006769] text-center p-4 font-bold">
        Note: Untuk Minggu ke-4 jam operasional dimulai pada pukul 08:00 - 21:00 setiap hari.
        </div>
    </div>
</body> 
}