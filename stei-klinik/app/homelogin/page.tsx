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
            
            <div className="flex justify-between items-center bg-white p-4 shadow-md">
                <div className="flex w-40">
                    <Header />
                </div>

              <Profile nama="Guest"/>
            </div>
        
            
            <div className=" flex items-center bg-[#006769] h-[71px] ">
                <div className="ml-auto p-4">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
                />
                </div>
            </div>
            
            </div>
        </div>
        <div className="p-0">
            <div className="flex justify-center  w-full h-full bg-white pl-16 pr-16 pt-16">
            <div className="flex flex-col  w-screen min-w-96 bg-white rounded">
                
                
                <div>
                <Image className="w-screen py-4 rounded"
                    src={Banner}
                    alt="Banner"
                />
                </div>
                
             

                <div>
                    <div className="flex items-center space-x-4">
                    <h1 className="text-[#006769] text-4xl font-bold pt-10 pl-10 pb-3 leading-tight">Feature</h1>
                    <hr className="flex-1 h-1 bg-[#006769] border-0 rounded mt-8" />
                </div>
                <div className="flex flex-wrap justify items-center">
                    <Featlink featlink="https://student.itb.ac.id/bk/peer" featcolor="solid" featname="Pendaming Sebaya ITB"/>
                    <Featlink featlink="https://six.itb.ac.id/" featcolor="solid" featname="Integrasi Direktorat"/>
                    <Featlink featlink="/chat-dokter" featcolor="" featname="Info Kesehatan"/>
                    <Featlink featlink="/chat-dokter" featcolor="" featname="Chat Dengan Dokter"/>
                </div>
                </div>
                <div className="flex items-center space-x-4">
                <h1 className="text-[#006769] text-4xl font-bold pt-10 pl-10 pb-3">Artikel</h1>
                <hr className="flex-1 h-1 bg-[#006769] border-0 rounded mt-8" />
                </div>
                <div className="w-full bg-[#F4FFE7] p-4 rounded mt-8 text-center flex flex-col items-center">
                <Image className="flex items-center"
                    src ={Spotlight}
                    alt = "Spotlight"
                />
                <h2 className="text-3xl text-black font-semibold hover:text-blue-400"><Link href="/articles/flu-dan-demam">Flu dan Demam: Gejala dan Cara Mencegahnya</Link></h2>
                <p className="text-black mt-2">Gejala pilek dan demam sama-sama membuat badan terasa tidak karuan. Akan tetapi, dua penyakit ini bisa membuat kondisi tubuh anda memburuk meski Anda sudah minum obat.
                <br/> Kebiasaan yang memperburuk gejala pilek dan demam: <br/>
                1. Membiarkan sakit begitu saja Pilek dan demam tampak seperti penyakit sepele sehingga sering dihiraukan. Menghiraukan penyakit sama saja membiarkan virus dan kuman semakin menyebar dalam tubuh. Akibatnya, kekebalan tubuh Anda menjadi semakin menurun dan kemungkinan penularannya pun akan semakin besar.</p>
                <p className="text-blue-400 mt-2"><Link href="/articles/flu-dan-demam">Selengkapnya </Link></p>
                </div>
                
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-[#F4FFE7] p-4 rounded shadow items-center flex flex-col">
                    <Image
                        src ={Artikel}
                        alt = "Artikel"
                    />
                    <h3 className="text-black font-bold hover:text-blue-400"><Link href="/articles/sakit-tenggorokan">Sakit Tenggorokan: Penyebab, Gejala, dan Pengobatan Efektif</Link></h3>
                    <p className="text-gray-600">20 Agustus 2024</p>
                </div>
                <div className="bg-[#F4FFE7] p-4 rounded shadow items-center flex flex-col">
                    <Image
                        src ={Artikel}
                        alt = "Artikel"
                    />
                    <h3 className="text-black font-bold hover:text-blue-400"><Link href="/articles/sakit-kepala ">Sakit Kepala: Jenis, Penyebab, dan Cara Mengobatinya</Link>
                    </h3>
                    <p className="text-gray-600">21 Agustus 2024</p>
                </div>
                <div className="bg-[#F4FFE7] p-4 rounded shadow items-center flex flex-col">
                    <Image
                        src ={Artikel}
                        alt = "Artikel"
                    />
                    <h3 className="text-black font-bold hover:text-blue-400"><Link href="/articles/penyebab-nyeri">Penyebab Umum Nyeri pada Tangan dan Cara Pencegahannya</Link></h3>
                    <p className="text-gray-600">22 Agustus 2024</p>
                </div>
                <div className="bg-[#F4FFE7] p-4 rounded shadow items-center flex flex-col">
                    <Image
                        src ={Artikel}
                        alt = "Artikel"
                    />
                    <h3 className="text-black font-bold hover:text-blue-400"><Link href="/articles/covid-19-masa-kini">Covid-19 Masa Kini</Link></h3>
                    <p className="text-gray-600">23 Agustus 2024</p>
                </div>
                </div>
                <br/>
                <button className=" rounded-full border-2 border-[#006769] px-4 py-2 text-[#006769] font-bold hover:border-blue-400 hover:text-blue-400 m-4">
                <Link href = "/pilih-artikel">Lihat Berita Lainnya</Link>
                </button>   
                
            </div>
            
        </div>
        <Footer></Footer>    
    </div>
    </div>
  );
}