import Image from "next/image";
import Banner from '@/public/Banner.png'
import Logo from '@/public/Logo.png'
import Featlink from './featurebutton'
import Spotlight from '@/public/Spotlight.png'
import Artikel from '@/public/Artikel.png'
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col bg-white">
        <div className="z-10">
            <div className="w-full flex flex-col">
            
            <div className="flex justify-between items-center bg-white p-4 shadow-md">
                <div className="flex pl-10">
                <Image 
                src={Logo} 
                alt="Logo" 
                width={50} 
                height={50} 
                />
                <h1 className="text-[#006769] text-3xl font-bold pt-2">STEI-Klinik</h1>
                </div>

                
                <div className="flex space-x-4 pr-10">
                <button className="bg-[#006769] text-white px-4 py-2 rounded hover:bg-blue-600">
                    Login
                </button>
                <button className="bg-[#006769] text-white px-4 py-2 rounded hover:bg-red-600">
                    Sign Up
                </button>
                </div>
            </div>
        
            
            <div className=" flex items-center bg-[#006769] h-[71px]">
                <div className="w-full max-w-2xl p-4 ">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
                />
                </div>
            </div>
            
            </div>
        </div>
        <div className="p-0">
            <div className="flex justify-center  w-full h-full bg-white pl-64 pr-64 pt-16">
            <div className="flex flex-col  w-full max-w bg-white p-8 rounded">
                
                
                <div>
                <Image className="w-full  py-4 rounded"
                    src={Banner}
                    alt="Banner"
                />
                </div>
                
                <div>
                <h1 className="text-[#006769] text-4xl font-bold pt-10 pl-10 pb-3">Feature</h1>
                <div className="flex flex-wrap">
                    <Featlink featlink="https://student.itb.ac.id/bk/peer" featcolor="solid" featname="Pendaming Sebaya ITB"/>
                    <Featlink featlink="https://six.itb.ac.id/" featcolor="solid" featname="Integrasi Direktorat"/>
                    <Featlink featlink="/chat-dokter" featcolor="" featname="Info Kesehatan"/>
                    <Featlink featlink="/chat-dokter" featcolor="" featname="Chat Dengan Dokter"/>
                </div>
                </div>
                <Link href="/articles/flu-dan-demam">
                    <div className="w-full bg-[#d8f691] p-4 rounded mt-8 text-center flex flex-col items-center">
                    <Image className="flex items-center"
                        src ={Spotlight}
                        alt = "Spotlight"
                    />
                    <h2 className="text-3xl text-black font-semibold">Flu dan Demam: Gejala dan Cara Mencegahnya</h2>
                    <p className="text-black mt-2">Gejala pilek dan demam sama-sama membuat badan terasa tidak karuan. Akan tetapi, dua penyakit ini bisa membuat kondisi tubuh anda memburuk meski Anda sudah minum obat.

            Kebiasaan yang memperburuk gejala pilek dan demam:


            1. Membiarkan sakit begitu saja

            Pilek dan demam tampak seperti penyakit sepele sehingga sering dihiraukan. Menghiraukan penyakit sama saja membiarkan virus dan kuman semakin menyebar dalam tubuh. Akibatnya, kekebalan tubuh Anda menjadi semakin menurun dan kemungkinan penularannya pun akan semakin besar.</p>
                    </div>
                </Link>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <Link href="articles/sakit-tenggorokan">
                    <div className="bg-[#d8f691] p-4 rounded shadow">
                        <h3 className="text-black font-bold">Sakit Tenggorokan: Penyebab, Gejala, dan Pengobatan Efektif</h3>
                        <p className="text-gray-600">20 Agustus 2024</p>
                    </div>
                </Link>
                <Link href="articles/sakit-kepala">
                    <div className="bg-[#d8f691] p-4 rounded shadow">
                        <h3 className="text-black font-bold">Sakit Kepala: Jenis, Penyebab, dan Cara Mengobatinya
                        </h3>
                        <p className="text-gray-600">21 Agustus 2024</p>
                    </div>
                </Link>
                <Link href="articles/penyebab-nyeri">
                    <div className="bg-[#d8f691] p-4 rounded shadow">
                        <h3 className="text-black font-bold">Penyebab Umum Nyeri pada Tangan dan Cara Pencegahannya</h3>
                        <p className="text-gray-600">22 Agustus 2024</p>
                    </div>
                </Link>
                <Link href="articles/covid-19-masa-kini">
                    <div className="bg-[#d8f691] p-4 rounded shadow">
                        <h3 className="text-black font-bold">Covid-19 Masa Kini</h3>
                        <p className="text-gray-600">23 Agustus 2024</p>
                    </div>
                </Link>
                </div>     
            </div>
        </div>
    </div>
    </div>
  );
}
