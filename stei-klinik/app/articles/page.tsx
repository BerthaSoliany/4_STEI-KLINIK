import HeaderLogo from '@/app/Header/logo'
import Pita from '@/app/Header/pita'
import Artikel from '@/public/Artikel.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="bg-white">
        {/* Header and Profile at the top */}
        <div className='flex justify-between'>
            <HeaderLogo />
        </div>
        
        <div className="flex-wrap flex-row p-4 mt-36 text-sm flex">
            <div className="bg-[#F4FFE7] text-black flex-col items-center rounded shadow p-4 m-4">
                <Image
                src ={Artikel}
                alt = "Artikel"
                />
                <h3 className="text-black font-bold hover:text-[#006769]"><Link href="/articles/covid-19-masa-kini">Covid-19 Masa Kini</Link></h3>
                <p className="text-gray-600">23 Agustus 2024</p>  
            </div>
            <div className="bg-[#F4FFE7] text-black flex-col items-center rounded shadow p-4 m-4">
                <Image
                src ={Artikel}
                alt = "Artikel"
                />
                <h3 className="text-black font-bold hover:text-[#006769]"><Link href="/articles/sakit-tenggorokan">Sakit Tenggorokan: Penyebab, Gejala, dan Pengobatan Efektif</Link></h3>
                <p className="text-gray-600">17 Agustus 2024</p>
            </div>
            <div className="bg-[#F4FFE7] text-black flex-col items-center rounded shadow p-4 m-4">
                <Image
                src ={Artikel}
                alt = "Artikel"
                />
                <h3 className="text-black font-bold hover:text-[#006769]"><Link href="/articles/sakit-kepala">Sakit Kepala: Jenis, Penyebab, dan Cara Mengobatinya</Link>
                </h3>
                <p className="text-gray-600">17 Agustus 2024</p>
            </div>
            <div className="bg-[#F4FFE7] text-black flex-col items-center rounded shadow p-4 m-4">
                <Image
                src ={Artikel}
                alt = "Artikel"
                />
                <h3 className="text-black font-bold hover:text-[#006769]"><Link href="/articles/penyebab-nyeri">Penyebab Umum Nyeri pada Tangan dan Cara Pencegahannya</Link></h3>
                <p className="text-gray-600">22 Agustus 2024</p>
            </div>
            <div className="bg-[#F4FFE7] text-black flex-col items-center rounded shadow p-4 m-4">
                <Image
                src ={Artikel}
                alt = "Artikel"
                />
                <h3 className="text-black font-bold hover:text-[#006769]"><Link href="/articles/flu-dan-demam">Flu dan Demam: Gejala dan Cara Mencegahnya</Link></h3>
                <p className="text-gray-600">18 Agustus 2024</p>
            </div>
            <div className="bg-[#F4FFE7] text-black flex flex-col items-center justify-center rounded shadow w-96 h-72 m-4 font-bold">Coming soon!</div>
        </div>
        <Pita judul={''}></Pita>    
        </div>
    )
}
