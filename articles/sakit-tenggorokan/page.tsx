import Image from "next/image";
import Logo from '@/public/Logo.png'
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <header className="relative">
        <Image
        src="/article-tenggorokan.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-screen h-56 object-cover"/>
        <div className="w-screen h-10 flex text-black justify-between border-b-2 border-gray-300 items-center text-xs">
          <div className="p-2">Author: Bertha Soliany</div>
          <div className="p-2 px-8">Published: 17-8-2024</div>
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
        <h1 className="text-center font-bold text-4xl m-10">Sakit Tenggorokan: Penyebab, Gejala, dan Pengobatan Efektif</h1>
        <p className="p-8">
        Sakit tenggorokan adalah salah satu keluhan kesehatan yang sering dialami oleh banyak orang. Kondisi ini biasanya disebabkan oleh infeksi, baik yang disebabkan oleh virus maupun bakteri. Meskipun sering kali dianggap sebagai masalah kesehatan yang ringan, sakit tenggorokan dapat menyebabkan ketidaknyamanan yang signifikan dan mengganggu aktivitas sehari-hari. Oleh karena itu, penting untuk memahami penyebab, gejala, dan metode pengobatan yang efektif untuk kondisi ini.
        <br /><br />
        Sakit tenggorokan dapat disebabkan oleh berbagai faktor. Infeksi virus, seperti flu atau pilek, adalah penyebab paling umum. Virus-virus ini menyerang lapisan tenggorokan, menyebabkan peradangan dan iritasi. Selain itu, infeksi bakteri, seperti Streptococcus, juga bisa menjadi penyebab. Infeksi bakteri ini biasanya lebih serius dan memerlukan pengobatan dengan antibiotik.
        <br /><br />
        Selain infeksi, faktor lain seperti alergi, udara kering, dan polusi juga dapat menyebabkan sakit tenggorokan. Alergi terhadap debu, serbuk sari, atau bulu hewan peliharaan dapat memicu iritasi tenggorokan. Udara yang terlalu kering, terutama di musim dingin, dapat mengeringkan tenggorokan dan menyebabkan rasa sakit. Polusi udara, termasuk asap rokok, juga dapat mengiritasi tenggorokan.
        <br /><br />
        Gejala sakit tenggorokan bervariasi tergantung pada penyebabnya. Gejala umum termasuk rasa sakit atau iritasi di tenggorokan, kesulitan menelan, suara serak, dan pembengkakan di kelenjar getah bening leher. Pada kasus yang disebabkan oleh infeksi bakteri, gejala tambahan seperti demam, sakit kepala, dan ruam kulit juga bisa terjadi.
        <br /><br />
        Dalam beberapa kasus, sakit tenggorokan bisa disertai dengan gejala lainnya seperti batuk, pilek, atau nyeri otot, terutama jika disebabkan oleh infeksi virus. Jika gejala-gejala ini berlangsung lebih dari beberapa hari atau disertai dengan demam tinggi, penting untuk mencari bantuan medis.
        <br /><br />
        Pengobatan untuk sakit tenggorokan tergantung pada penyebabnya. Jika sakit tenggorokan disebabkan oleh infeksi virus, pengobatan biasanya berfokus pada pereda gejala karena virus tidak dapat diobati dengan antibiotik. Pengobatan rumahan seperti berkumur dengan air garam hangat, minum banyak cairan, dan mengonsumsi obat pereda nyeri seperti ibuprofen atau parasetamol dapat membantu mengurangi rasa sakit dan peradangan.
        <br /><br />
        Jika sakit tenggorokan disebabkan oleh infeksi bakteri, dokter mungkin akan meresepkan antibiotik. Penting untuk mengonsumsi antibiotik sesuai petunjuk dokter dan menyelesaikan seluruh rangkaian pengobatan, bahkan jika gejala sudah membaik. Hal ini penting untuk mencegah resistensi antibiotik dan memastikan infeksi benar-benar sembuh.
        <br /><br />
        Untuk sakit tenggorokan yang disebabkan oleh alergi, menghindari pemicu alergi dan menggunakan antihistamin dapat membantu meredakan gejala. Menggunakan humidifier untuk melembapkan udara di dalam ruangan juga dapat membantu mengurangi iritasi tenggorokan yang disebabkan oleh udara kering.
        <br /><br />
        Sakit tenggorokan adalah kondisi umum yang dapat disebabkan oleh berbagai faktor, termasuk infeksi, alergi, dan polusi. Meskipun sering kali tidak serius, kondisi ini dapat menyebabkan ketidaknyamanan yang signifikan. Dengan memahami penyebab dan gejalanya, serta menerapkan pengobatan yang tepat, sakit tenggorokan dapat dikelola dengan efektif, memungkinkan Anda untuk kembali beraktivitas dengan nyaman.</p>
      </div>
    </main>
  );
}
