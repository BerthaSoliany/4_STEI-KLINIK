import Image from "next/image";
import Logo from '@/public/Logo.png'
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <header className="relative">
        <Image
        src="/article-tangan.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-screen h-56 object-cover"/>
        <div className=" h-10 flex text-black justify-between border-b-2 border-gray-300 items-center text-xs">
          <div className="p-2">Author: Henry Filberto</div>
          <div className="p-2">Published: 20-8-2024</div>
        </div>
        <Link href="/home">
          <div className="flex absolute top-4 left-4">
              <Image 
              src={Logo} 
              alt="Logo" 
              width={50} 
              height={50} 
              />
              <h1 className="text-[#006769] text-3xl font-bold pt-2 pl-2">STEI-Klinik</h1>
          </div>
        </Link>
      </header>
      <div className="text-gray-500 mx-8">
        <h1 className="text-center font-bold text-4xl m-10">Penyebab Umum Nyeri pada Tangan dan Cara Pencegahannya</h1>
        <p className="p-8">
        Nyeri pada tangan adalah keluhan umum yang bisa disebabkan oleh berbagai kondisi. Tangan adalah bagian tubuh yang sangat aktif dan sering terkena stres, yang membuatnya rentan terhadap berbagai masalah kesehatan. Meskipun nyeri tangan bisa bersifat sementara dan disebabkan oleh aktivitas berlebihan, ada juga penyebab yang lebih serius yang perlu diperhatikan. Memahami penyebab umum dan cara pencegahannya dapat membantu mengelola dan mencegah nyeri tangan secara efektif.
        <br /><br />
        Salah satu penyebab umum nyeri tangan adalah cedera akibat penggunaan yang berlebihan atau trauma fisik. Aktivitas yang melibatkan gerakan berulang, seperti mengetik atau mengangkat benda berat, dapat menyebabkan nyeri dan ketegangan pada otot, tendon, dan sendi tangan. Cedera seperti keseleo atau strain juga dapat terjadi akibat kecelakaan atau gerakan yang salah.
        <br /><br />
        Penyebab lain dari nyeri tangan termasuk kondisi medis seperti sindrom terowongan karpal, arthritis, dan tendinitis. Sindrom terowongan karpal terjadi ketika saraf median di pergelangan tangan tertekan, menyebabkan rasa nyeri, kesemutan, dan kelemahan di tangan. Arthritis, baik osteoarthritis maupun rheumatoid arthritis, dapat menyebabkan peradangan dan nyeri pada sendi tangan. Tendinitis, yaitu peradangan pada tendon, dapat menyebabkan nyeri yang sering kali diperparah oleh aktivitas fisik.
        <br /><br />
        Faktor lain yang dapat menyebabkan nyeri tangan termasuk postur tubuh yang buruk dan ketegangan otot. Postur tubuh yang tidak tepat saat duduk atau bekerja dapat memberikan tekanan tambahan pada tangan dan pergelangan tangan, menyebabkan ketidaknyamanan. Selain itu, stres emosional dan fisik dapat memperburuk rasa nyeri dengan menyebabkan ketegangan otot di tangan dan lengan.
        <br /><br />
        Untuk mencegah nyeri tangan, penting untuk menerapkan beberapa strategi. Pertama, perhatikan postur tubuh saat melakukan aktivitas yang melibatkan tangan. Pastikan posisi tangan dan pergelangan tangan Anda dalam posisi yang nyaman dan tidak menimbulkan tekanan berlebihan. Jika Anda bekerja di depan komputer, gunakan peralatan ergonomis seperti keyboard dan mouse yang dirancang untuk mengurangi ketegangan pada tangan.
        <br /><br />
        Selain itu, lakukan latihan peregangan dan penguatan tangan secara rutin untuk menjaga fleksibilitas dan kekuatan otot. Mengambil istirahat singkat secara teratur saat melakukan aktivitas yang melibatkan gerakan berulang juga dapat membantu mengurangi risiko cedera. Jika Anda mengalami nyeri yang terus-menerus atau semakin parah, penting untuk mencari bantuan medis untuk mendapatkan diagnosis dan pengobatan yang tepat.
        <br /><br />
        Menjaga kesehatan tangan memerlukan perhatian dan perawatan yang konsisten. Dengan memahami penyebab umum nyeri tangan dan menerapkan langkah-langkah pencegahan yang tepat, Anda dapat mengurangi risiko masalah tangan dan menjaga kenyamanan serta fungsionalitas tangan Anda dalam aktivitas sehari-hari.
        </p>
      </div>
    </main>
  );
}
