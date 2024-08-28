import Image from "next/image";
import Logo from '@/public/Logo.png'
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <header className="relative">
        <Image
        src="/article-flu.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-screen h-56 object-cover"/>
        <div className="h-10 flex text-black justify-between border-b-2 border-gray-300 items-center text-xs">
          <div className="p-2">Author: Ivan Wirawan</div>
          <div className="p-2 px-8">Published: 18-8-2024</div>
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
        <h1 className="text-center font-bold text-4xl m-10">Flu dan Demam: Gejala dan Cara Mencegahnya</h1>
        <p className="p-8">
        Flu dan demam adalah dua kondisi kesehatan yang sering terjadi dan dapat mempengaruhi aktivitas sehari-hari. Meskipun keduanya sering kali saling terkait, mereka memiliki penyebab dan karakteristik yang berbeda. Memahami gejala flu dan demam serta cara pencegahannya dapat membantu Anda menjaga kesehatan dan mengurangi risiko infeksi.
        <br /><br />
        Flu, atau influenza, adalah infeksi virus yang menyerang saluran pernapasan. Gejala flu biasanya meliputi demam tinggi, batuk, pilek, sakit tenggorokan, dan nyeri tubuh. Selain itu, flu juga sering disertai dengan kelelahan yang signifikan dan sakit kepala. Gejala flu dapat bervariasi dari ringan hingga berat, dan dalam beberapa kasus, flu dapat menyebabkan komplikasi serius seperti pneumonia.
        <br /><br />
        Demam, di sisi lain, adalah kondisi di mana suhu tubuh meningkat di atas batas normal, biasanya sebagai respons terhadap infeksi atau peradangan. Demam dapat disebabkan oleh berbagai hal, termasuk infeksi virus, bakteri, atau kondisi medis lainnya. Gejala demam meliputi peningkatan suhu tubuh, menggigil, berkeringat, dan rasa tidak nyaman. Demam sering kali merupakan gejala yang menyertai flu, tetapi juga dapat terjadi secara terpisah.
        <br /><br />
        Untuk mencegah flu dan demam, ada beberapa langkah yang dapat diambil. Salah satu langkah pencegahan yang paling efektif adalah dengan menjaga kebersihan tangan. Cuci tangan secara teratur dengan sabun dan air mengalir, terutama setelah bersin, batuk, atau kontak dengan permukaan yang mungkin terkontaminasi. Menghindari kontak langsung dengan orang yang sedang sakit juga dapat membantu mengurangi risiko penularan.
        <br /><br />
        Vaksinasi adalah cara pencegahan penting lainnya, terutama untuk flu. Vaksin flu tahunan dapat membantu melindungi Anda dari virus influenza dan mengurangi kemungkinan mengalami gejala flu yang berat. Vaksin flu direkomendasikan untuk semua orang, terutama untuk kelompok yang lebih rentan seperti anak-anak, orang tua, dan mereka yang memiliki kondisi kesehatan tertentu.
        <br /><br />
        Selain itu, menjaga kesehatan secara umum dengan pola makan yang seimbang, cukup tidur, dan olahraga teratur juga dapat memperkuat sistem kekebalan tubuh dan membantu melawan infeksi. Jika Anda mengalami gejala flu atau demam, istirahat yang cukup dan minum banyak cairan sangat penting untuk pemulihan.
        <br /><br />
        Jika gejala flu atau demam Anda tidak membaik setelah beberapa hari, atau jika Anda mengalami gejala yang parah seperti kesulitan bernapas, nyeri dada, atau kebingungan, segera cari bantuan medis. Pengobatan dini dan perawatan yang tepat dapat mencegah komplikasi dan mempercepat proses pemulihan.
        <br /><br />
        Menjaga kebersihan dan kesehatan tubuh, serta mengikuti langkah-langkah pencegahan yang tepat, adalah kunci untuk mengurangi risiko flu dan demam. Dengan pengetahuan yang tepat dan tindakan pencegahan yang efektif, Anda dapat melindungi diri dan keluarga dari infeksi serta menjaga kesehatan secara keseluruhan.
        </p>
      </div>
    </main>
  );
}
