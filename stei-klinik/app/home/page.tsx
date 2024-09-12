import Image from "next/image";
import Banner from '@/public/Banner.png'
import Logo from '@/public/Logo.png'
import Featlink from './featurebutton'
import Spotlight from '@/public/Spotlight.png'
import Artikel from '@/public/Artikel.png'
import Header from '@/app/Header/logo'
import Link from "next/link"
import Footer from '@/app/Footer/footerhome'
import Profile from "../Header/profile"

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
        <div className="z-10">
            <div className="w-full flex flex-col">
            
            <div className="flex justify-between items-center bg-white p-4  border-b-2 border-b-[#006769] shadow-md">
                <div className="flex w-40 h-10">
                    <Header />
                </div>
            </div>
            </div>
        </div>
        <div className="p-0">
            <div className="flex justify-center  w-full h-full bg-white px-8 pt-16">
            <div className="flex flex-col items-center  w-screen min-w-96 bg-white rounded">
                <div>
                <Image
                    src={Banner}
                    alt="Banner"
                />
                </div>
                <div className="flex w-full justify-center items-center">
                    <div className="text-[#006769] font-semibold w-auto p-1">Features</div>
                    <div className="bg-[#006769] h-0.5 flex-1 rounded-full"></div>
                </div>
                <div>
                    <div className="flex flex-wrap justify items-center">
                        <a href="https://student.itb.ac.id/bk/peer" target="_blank"><button className="bg-[#006769] text-[#F4FFE7] px-4 py-2 rounded-full m-2 hover:text-[#006769] hover:bg-transparent border-[#006769] border-2 shadow-md">Pendamping Sebaya ITB</button></a>
                        <a href="https://six.itb.ac.id/" target="_blank"><button className="bg-[#006769] text-[#F4FFE7] px-4 py-2 rounded-full m-2 hover:text-[#006769] hover:bg-transparent border-[#006769] border-2 shadow-md">Integrasi Direktorat</button></a>
                        <a href="/chat-dokter"><button className="bg-[#006769] text-[#F4FFE7] px-4 py-2 rounded-full m-2 hover:text-[#006769] hover:bg-transparent border-[#006769] border-2 shadow-md">Info Kesehatan</button></a>
                        <a href="/chat-dokter"><button className="bg-[#006769] text-[#F4FFE7] px-4 py-2 rounded-full m-2 hover:text-[#006769] hover:bg-transparent border-[#006769] border-2 shadow-md">Chat dengan Dokter</button></a>
                    </div>
                </div>
                <div className="flex w-full justify-center items-center">
                        <div className="text-[#006769] font-semibold w-auto p-1">Articles</div>
                        <div className="bg-[#006769] h-0.5 flex-1 rounded-full"></div>
                </div>
                <div className="w-full bg-[#F4FFE7] p-4 rounded mt-8 text-center flex flex-col items-center shadow">
                    <Image className="flex items-center"
                        src ={Spotlight}
                        alt = "Spotlight"
                    />
                    <h2 className="text-3xl text-black font-semibold hover:text-[#006769]"><Link href="/articles/flu-dan-demam">Flu dan Demam: Gejala dan Cara Mencegahnya</Link></h2>
                    <p className="text-black mt-2 text-justify">Gejala pilek dan demam sama-sama membuat badan terasa tidak karuan. Akan tetapi, dua penyakit ini bisa membuat kondisi tubuh anda memburuk meski Anda sudah minum obat.
                    <br/> <br /> Kebiasaan yang memperburuk gejala pilek dan demam: <br/>
                    1. Membiarkan sakit begitu saja Pilek dan demam tampak seperti penyakit sepele sehingga sering dihiraukan. Menghiraukan penyakit sama saja membiarkan virus dan kuman semakin menyebar dalam tubuh. Akibatnya, kekebalan tubuh Anda menjadi semakin menurun dan kemungkinan penularannya pun akan semakin besar.</p>
                    <p className="text-[#006769] mt-2"><Link href="/articles/flu-dan-demam">Selengkapnya </Link></p>
                </div>
                
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 ">
                    <div className="bg-[#F4FFE7] p-4 rounded shadow items-center flex flex-col ">
                        <Image
                            src ={Artikel}
                            alt = "Artikel"
                        />
                        <h3 className="text-black font-bold hover:text-[#006769]"><Link href="/articles/sakit-tenggorokan">Sakit Tenggorokan: Penyebab, Gejala, dan Pengobatan Efektif</Link></h3>
                        <p className="text-gray-600">20 Agustus 2024</p>
                    </div>
                    <div className="bg-[#F4FFE7] p-4 rounded shadow items-center flex flex-col">
                        <Image
                            src ={Artikel}
                            alt = "Artikel"
                        />
                        <h3 className="text-black font-bold hover:text-[#006769]"><Link href="/articles/sakit-kepala ">Sakit Kepala: Jenis, Penyebab, dan Cara Mengobatinya</Link>
                        </h3>
                        <p className="text-gray-600">21 Agustus 2024</p>
                    </div>
                    <div className="bg-[#F4FFE7] p-4 rounded shadow items-center flex flex-col">
                        <Image
                            src ={Artikel}
                            alt = "Artikel"
                        />
                        <h3 className="text-black font-bold hover:text-[#006769]"><Link href="/articles/penyebab-nyeri">Penyebab Umum Nyeri pada Tangan dan Cara Pencegahannya</Link></h3>
                        <p className="text-gray-600">22 Agustus 2024</p>
                    </div>
                    <div className="bg-[#F4FFE7] p-4 rounded shadow items-center flex flex-col">
                        <Image
                            src ={Artikel}
                            alt = "Artikel"
                        />
                        <h3 className="text-black font-bold hover:text-[#006769]"><Link href="/articles/covid-19-masa-kini">Covid-19 Masa Kini</Link></h3>
                        <p className="text-gray-600">23 Agustus 2024</p>
                    </div>
                </div>
                <br/>
                <button className=" rounded-full border-2 border-[#006769] px-4 py-2 text-[#006769] font-bold hover:bg-[#006769] hover:text-[#F4FFE7] m-4 shadow-md">
                <Link href = "/pilih-artikel">Lihat Berita Lainnya</Link>
                </button>   
                
            </div>
            
        </div>
        <Footer></Footer>    
    </div>
    </div>
  );
}