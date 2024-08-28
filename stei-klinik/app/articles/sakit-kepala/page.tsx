import Image from "next/image";
import Logo from '@/public/Logo.png'
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <header className="relative">
        <Image
        src="/article-kepala.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-screen h-56 object-cover"/>
        <div className="h-10 flex text-black justify-between border-b-2 border-gray-300 items-center text-xs">
          <div className="p-2">Author: Richard</div>
          <div className="p-2 px-8">Published: 22-8-2024</div>
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
        <h1 className="text-center font-bold text-4xl m-10">Sakit Kepala: Jenis, Penyebab, dan Cara Mengobatinya</h1>
        <p className="p-8">
        Sakit kepala adalah salah satu kondisi kesehatan yang paling umum dialami oleh banyak orang. Meskipun sering kali tidak berbahaya, sakit kepala bisa sangat mengganggu dan mempengaruhi aktivitas sehari-hari. Ada berbagai jenis sakit kepala dengan penyebab yang berbeda-beda, sehingga penting untuk mengenali jenis sakit kepala yang dialami agar dapat memberikan penanganan yang tepat.
        <br /><br />
        Sakit kepala dapat dikategorikan ke dalam beberapa jenis utama, yaitu sakit kepala tegang, migrain, dan sakit kepala cluster. Sakit kepala tegang adalah jenis yang paling umum dan biasanya disebabkan oleh stres, kurang tidur, atau ketegangan otot leher dan bahu. Sakit kepala ini biasanya terasa seperti tekanan atau rasa nyeri tumpul di sekitar dahi atau belakang kepala.
        <br /><br />
        Migrain adalah jenis sakit kepala yang lebih parah dan sering kali disertai dengan gejala tambahan seperti mual, muntah, dan sensitivitas terhadap cahaya atau suara. Migrain biasanya terjadi pada satu sisi kepala dan dapat berlangsung selama beberapa jam hingga beberapa hari. Sakit kepala cluster, di sisi lain, adalah jenis sakit kepala yang jarang tetapi sangat intens. Sakit kepala ini terjadi dalam kelompok atau "cluster," biasanya di sekitar satu mata, dan bisa sangat menyakitkan.
        <br /><br />
        Penyebab sakit kepala bervariasi tergantung pada jenisnya. Sakit kepala tegang biasanya disebabkan oleh faktor-faktor seperti stres, kecemasan, ketegangan otot, dan kurang tidur. Posisi tubuh yang salah saat duduk atau bekerja juga dapat memicu sakit kepala tegang.
        <br /><br />
        Migrain, meskipun penyebab pastinya belum sepenuhnya dipahami, sering kali dipicu oleh faktor-faktor seperti perubahan hormon, makanan tertentu, stres, dan perubahan pola tidur. Beberapa orang mungkin juga memiliki riwayat keluarga yang rentan terhadap migrain.
        <br /><br />
        Sakit kepala cluster memiliki penyebab yang lebih kompleks dan belum sepenuhnya diketahui. Namun, faktor-faktor seperti konsumsi alkohol, merokok, dan perubahan pola tidur diduga dapat memicu serangan sakit kepala cluster. Selain itu, sakit kepala ini lebih sering terjadi pada pria dibandingkan wanita.
        <br /><br />
        Pengobatan sakit kepala tergantung pada jenis dan penyebabnya. Untuk sakit kepala tegang, pengobatan rumahan seperti istirahat yang cukup, pijat leher dan bahu, serta penggunaan obat pereda nyeri yang dijual bebas seperti ibuprofen atau parasetamol dapat membantu mengurangi gejalanya.
        <br /><br />
        Pengobatan migrain mungkin memerlukan pendekatan yang lebih khusus. Obat-obatan seperti triptan, yang tersedia dengan resep dokter, dapat membantu mengatasi serangan migrain. Selain itu, menghindari pemicu migrain seperti makanan tertentu atau perubahan pola tidur juga penting dalam mengelola kondisi ini. Bagi penderita migrain kronis, dokter mungkin merekomendasikan obat pencegahan yang harus diminum secara rutin.
        <br /><br />
        Sakit kepala cluster adalah jenis yang paling sulit diobati dan sering kali memerlukan penanganan medis. Pengobatan mungkin melibatkan penggunaan oksigen murni, obat triptan, atau obat lain yang diresepkan oleh dokter. Karena intensitasnya yang tinggi, penting untuk segera mencari bantuan medis jika mengalami sakit kepala jenis ini.
        <br /><br />
        Sakit kepala adalah kondisi yang umum tetapi bisa sangat mengganggu. Mengenali jenis sakit kepala yang dialami dan memahami penyebabnya adalah langkah pertama dalam mencari pengobatan yang efektif. Meskipun banyak sakit kepala dapat diatasi dengan perawatan sederhana di rumah, penting untuk mencari bantuan medis jika sakit kepala terjadi secara teratur atau sangat parah. Dengan penanganan yang tepat, sakit kepala dapat dikelola dengan baik sehingga Anda dapat menjalani hari-hari Anda tanpa terganggu oleh rasa sakit.
        </p>
      </div>
    </main>
  );
}
