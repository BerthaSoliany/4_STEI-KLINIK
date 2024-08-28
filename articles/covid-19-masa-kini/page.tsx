import Image from "next/image";
import Logo from '@/public/Logo.png'
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <header className="relative">
        <Image
        src="/article-covid.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="w-screen h-56 object-cover"/>
        <div className="h-10 flex text-black justify-between border-b-2 border-gray-300 items-center text-xs">
          <div className="p-2">Author: Wisa Ahmaduta Dinutama</div>
          <div className="p-2 px-8">Published: 23-8-2024</div>
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
        <h1 className="text-center font-bold text-4xl m-10">Covid-19 Masa Kini</h1>
        <p className="p-8">
        Pandemi COVID-19 telah mengubah wajah dunia sejak pertama kali muncul pada akhir tahun 2019. Meskipun saat ini kita telah berada di tahun 2024, dampak dari virus SARS-CoV-2 yang menyebabkan COVID-19 masih terasa kuat. Dunia telah melalui beberapa gelombang infeksi, munculnya berbagai varian baru, dan upaya besar-besaran dalam vaksinasi serta perawatan medis. Namun, pandemi ini tidak hanya meninggalkan jejak pada angka kasus dan kematian, tetapi juga pada sistem kesehatan, ekonomi global, dan pola hidup masyarakat.
        <br /><br />
        Meskipun vaksinasi global telah mencapai banyak populasi, COVID-19 terus beradaptasi dan bermutasi, menghasilkan varian-varian baru seperti Delta, Omicron, dan subvarian lainnya. Varian ini memiliki karakteristik yang berbeda-beda, termasuk tingkat penularan yang lebih tinggi dan, dalam beberapa kasus, kemampuan untuk mengurangi efektivitas vaksin yang ada. Hal ini menimbulkan tantangan baru bagi para ilmuwan dan profesional kesehatan yang terus berupaya mengembangkan vaksin yang lebih efektif serta memperbarui protokol kesehatan yang ada.
        <br /><br />
        Seiring dengan perkembangan varian baru, muncul juga tantangan dalam upaya penanganan pandemi, termasuk munculnya "pandemic fatigue" atau kelelahan pandemi di kalangan masyarakat. Setelah bertahun-tahun hidup dalam ketidakpastian dan pembatasan sosial, banyak orang mulai meremehkan risiko COVID-19, mengabaikan protokol kesehatan, dan merasa jenuh dengan berita tentang pandemi. Ini merupakan tantangan bagi pemerintah dan otoritas kesehatan untuk tetap menjaga kesadaran dan kepatuhan masyarakat tanpa menyebabkan kepanikan atau kelelahan yang lebih lanjut.
        <br /><br />
        Salah satu tonggak terbesar dalam melawan COVID-19 adalah pengembangan vaksin dalam waktu singkat. Vaksin mRNA, seperti Pfizer-BioNTech dan Moderna, serta vaksin viral vector seperti AstraZeneca dan Johnson & Johnson, telah memainkan peran penting dalam menurunkan angka kematian dan keparahan penyakit. Vaksin ini tidak hanya melindungi individu, tetapi juga membantu mengurangi penyebaran virus di masyarakat.
        <br /><br />
        Namun, keberhasilan vaksinasi tidak merata di seluruh dunia. Negara-negara maju telah mampu memberikan vaksin kepada sebagian besar populasinya, sementara negara-negara berkembang masih menghadapi tantangan dalam distribusi dan akses terhadap vaksin. Ketidaksetaraan ini menciptakan "kesenjangan vaksinasi" yang memperburuk dampak pandemi di negara-negara dengan sistem kesehatan yang lebih lemah. Selain itu, munculnya gerakan anti-vaksinasi dan keraguan terhadap vaksin juga menambah tantangan dalam mencapai cakupan vaksinasi yang optimal.
        <br /><br />
        Pandemi COVID-19 tidak hanya menimbulkan dampak langsung melalui infeksi dan kematian, tetapi juga dampak jangka panjang yang signifikan pada kesehatan masyarakat. Banyak pasien COVID-19 yang sembuh melaporkan mengalami kondisi yang dikenal sebagai "Long COVID," di mana mereka mengalami gejala berkepanjangan seperti kelelahan, kesulitan bernapas, dan masalah kognitif. Fenomena ini menunjukkan bahwa dampak COVID-19 dapat berlangsung jauh lebih lama daripada yang diperkirakan sebelumnya.
        <br /><br />
        Selain itu, pandemi ini telah mempengaruhi kesehatan mental secara global. Peningkatan tingkat stres, kecemasan, dan depresi dilaporkan di banyak negara akibat ketidakpastian, isolasi sosial, dan kehilangan pekerjaan yang dialami selama pandemi. Krisis kesehatan mental ini menyoroti perlunya peningkatan akses terhadap layanan kesehatan mental yang memadai dan dukungan sosial.
        <br /><br />
        Sejak pandemi dimulai, masyarakat telah dipaksa untuk beradaptasi dengan berbagai perubahan dalam kehidupan sehari-hari. Penggunaan masker, menjaga jarak sosial, dan pembatasan perjalanan menjadi bagian dari "normal baru." Banyak perusahaan beralih ke model kerja dari rumah (remote working), dan teknologi digital menjadi pusat dari banyak aspek kehidupan, termasuk pendidikan, perawatan kesehatan, dan hiburan.
        <br /><br />
        Meskipun beberapa dari perubahan ini mungkin bersifat sementara, banyak yang diperkirakan akan bertahan dalam jangka panjang. Misalnya, kerja jarak jauh telah menjadi pilihan yang lebih umum dan fleksibel bagi banyak perusahaan, dan telemedicine menjadi alat penting dalam menyediakan layanan kesehatan, terutama di daerah yang sulit dijangkau.
        <br /><br />
        Pandemi COVID-19 telah mengajarkan kepada dunia banyak pelajaran penting tentang kesiapsiagaan dan respons terhadap krisis kesehatan. Salah satu pelajaran utama adalah pentingnya kerja sama global. Pandemi ini tidak mengenal batas negara, dan oleh karena itu, respons yang efektif memerlukan kolaborasi internasional dalam hal berbagi informasi, sumber daya, dan strategi.
        <br /><br />
        Selain itu, pandemi ini menekankan pentingnya investasi dalam penelitian dan pengembangan, tidak hanya untuk mengatasi COVID-19, tetapi juga untuk menghadapi ancaman kesehatan lainnya di masa depan. Pandemi berikutnya mungkin tidak jauh di depan, dan dunia perlu lebih siap dengan sistem kesehatan yang kuat, vaksin dan perawatan yang dapat diakses dengan cepat, serta strategi mitigasi yang lebih baik.
        <br /><br />
        Pandemi COVID-19 masih menjadi tantangan besar di masa kini, meskipun telah banyak kemajuan yang dicapai dalam upaya mengendalikannya. Dari munculnya varian baru hingga dampak jangka panjang pada kesehatan mental dan fisik, pandemi ini mengingatkan kita bahwa kesehatan adalah prioritas utama yang harus dijaga dengan serius. Dunia harus terus beradaptasi dan belajar dari pengalaman ini untuk memastikan bahwa kita lebih siap menghadapi krisis kesehatan di masa depan. Hanya dengan kerja sama global dan komitmen bersama, kita dapat mengatasi tantangan ini dan membangun dunia yang lebih sehat dan tangguh.</p>
      </div>
    </main>
  );
}
