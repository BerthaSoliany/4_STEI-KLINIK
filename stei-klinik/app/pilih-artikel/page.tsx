import HeaderLogo from '@/app/Header/logo'
import Pita from '@/app/Header/pita'
import Profile from '@/app/Header/profile'
import Artikel from '@/public/Artikel.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
        {/* Header and Profile at the top */}
        <div className='flex justify-between'>
            <HeaderLogo />
            <Profile />
        </div>
        
        <div className="flex-grow grid grid-cols-3 grid-rows-2 gap-4 p-4 mt-28">
            <div className="bg-[#F4FFE7] text-black flex flex-col items-center rounded shadow">
                <Image
                src ={Artikel}
                alt = "Artikel"
                />
                <h3 className="text-black font-bold hover:text-blue-400"><Link href="/articles/covid-19-masa-kini">Covid-19 Masa Kini</Link></h3>
                <p className="text-gray-600">23 Agustus 2024</p>  
            </div>
            <div className="bg-[#F4FFE7] text-black flex flex-col items-center rounded shadow">
                <Image
                src ={Artikel}
                alt = "Artikel"
                />
                <h3 className="text-black font-bold hover:text-blue-400"><Link href="/articles/sakit-tenggorokan">Sakit Tenggorokan: Penyebab, Gejala, dan Pengobatan Efektif</Link></h3>
                <p className="text-gray-600">20 Agustus 2024</p>
            </div>
            <div className="bg-[#F4FFE7] text-black flex flex-col items-center rounded shadow">
                <Image
                src ={Artikel}
                alt = "Artikel"
                />
                <h3 className="text-black font-bold hover:text-blue-400"><Link href="/articles/sakit-kelapa">Sakit Kepala: Jenis, Penyebab, dan Cara Mengobatinya</Link>
                </h3>
                <p className="text-gray-600">21 Agustus 2024</p>
            </div>
            <div className="bg-[#F4FFE7] text-black flex flex-col items-center rounded shadow">
                <Image
                src ={Artikel}
                alt = "Artikel"
                />
                <h3 className="text-black font-bold hover:text-blue-400"><Link href="/articles/penyebab-nyeri">Penyebab Umum Nyeri pada Tangan dan Cara Pencegahannya</Link></h3>
                <p className="text-gray-600">22 Agustus 2024</p>
            </div>
            <div className="bg-[#F4FFE7] text-black flex flex-col items-center rounded shadow">
                <Image
                src ={Artikel}
                alt = "Artikel"
                />
                <h3 className="text-black font-bold hover:text-blue-400"><Link href="/articles/flu-dan-demam">Flu dan Demam: Gejala dan Cara Mencegahnya</Link></h3>
                <p className="text-gray-600">18 Agustus 2024</p>
            </div>
            <div className="bg-[#F4FFE7] text-black flex flex-col items-center justify-center rounded shadow">Coming soon</div>
        </div>
        <Pita></Pita>
        </div>

       
    )
}