import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-teal-700 text-white mb-8">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="STEI-KLINIK Logo" className="h-8" />
          <h1 className="text-lg font-bold">STEI-KLINIK</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img src="/user-icon.png" alt="User Icon" className="h-6" />
            <span className="text-sm">(Nama)</span>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 rounded-lg focus:outline-none text-black"
          />
          <img src="/settings-icon.png" alt="Settings Icon" className="h-6" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg p-8 text-center mb-8 h-60 flex items-center justify-center">
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-5xl font-bold" style={{ color: '#E6FF94' }}>WELCOME TO</h1>
            <h2 className="text-5xl font-bold mt-4" style={{ color: '#E6FF94' }}>STEI-KLINIK</h2>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-teal-700 mr-4">Feature</h3>
            <div className="flex-1 border-t border-teal-700"></div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <button className="bg-teal-600 text-white px-4 py-2 rounded-full">Pendamping Sebaya ITB</button>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-full">Integrasi Direktorat</button>
            <button className="bg-white text-black px-4 py-2 rounded-full border border-black">Info Kesehatan</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-full border border-black">Chat dengan Dokter</button>
            <button className="bg-white text-black px-4 py-2 rounded-full border border-black">Buat Janji dengan Dokter</button>
          </div>
        </section>

        {/* Highlighted Article */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-8 rounded-lg mb-8">
            <h4 className="text-xl font-bold mb-2">Flu dan Demam: Tips dan Trik untuk Tetap Sehat</h4>
            <p>19 Agustus 2024</p>
          </div>
        </section>

        {/* Articles Section */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-teal-700 mr-4">Artikel</h3>
            <div className="flex-1 border-t border-teal-700"></div>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="bg-gradient-to-r from-green-400 to-teal-500 p-4 rounded-lg w-1/3">
              <h5 className="text-lg font-bold">Sakit Tenggorokan: Penyebab, Gejala, dan Pengobatan Efektif</h5>
              <p className="text-sm">20 Agustus 2024</p>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-teal-500 p-4 rounded-lg w-1/3">
              <h5 className="text-lg font-bold">Sakit Kepala: Jenis, Penyebab, dan Cara Mengobatinya</h5>
              <p className="text-sm">21 Agustus 2024</p>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-teal-500 p-4 rounded-lg w-1/3">
              <h5 className="text-lg font-bold">Penyebab Umum Sakit Kepala dan Cara Pencegahannya</h5>
              <p className="text-sm">22 Agustus 2024</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full">Lihat Berita Lainnya</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-teal-700 text-white p-4 flex justify-between items-center mt-8">
        <div>
          <h4 className="font-bold">STEI-KLINIK</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-teal-400">Facebook</a>
            <a href="#" className="hover:text-teal-400">Instagram</a>
            <a href="#" className="hover:text-teal-400">Twitter</a>
          </div>
        </div>
        <button className="bg-teal-600 text-white px-6 py-2 rounded-full">Feedback</button>
      </footer>
    </div>
  );
};

export default HomePage;
