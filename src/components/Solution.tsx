import React, { useState } from "react";

const ComparisonTable = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      want: "Satu Akun Bisa Banyak Whatsapp",
      have: "Anda bisa memilih paket 1 Whatsapp, 5 Whatsapp atau Custom sesuai kebutuhan Anda, hubungi tim CS kami",
    },
    {
      want: "Koneksi Whatsapp Tidak Mudah Putus",
      have: "Koneksi nomor Whatsapp Anda dengan Dripsender dapat berlangsung lama, sehingga Anda tidak perlu bolak-balik menghubungkan Whatsapp berkali-kali",
    },
    {
      want: "Notifikasi Jika Whatsapp Putus",
      have: "Jika ada kendala yang mengakibatkan nomor Whatsapp disconnect, maka akan muncul notif melalui nomor Whatsapp Anda, sehingga Anda bisa segera menghubungkannya kembali",
    },
    {
      want: "Aplikasi Fast Loading",
      have: "Hal yang menyebalkan ketika sebuah aplikasi lambat melakukan loading, ini tidak terjadi pada Dripsender yang dirancang dengan teknologi yang sangat cepat dan ringan",
    },
    {
      want: "Bisa Grabbing Contact",
      have: "Bisa melakukan grabb / scrapping semua data kontak yang ada di grup atau yang sedang chat dengan nomor Anda",
    },
    {
      want: "Bikin Database Tanpa Batas",
      have: "Anda bisa menampung banyak sekali database calon pelanggan atau pelanggan lama Anda tanpa dibatasi jumlahnya",
    },
    {
      want: "Auto Follow Up Database",
      have: "Anda bisa menggunakan Evergreen Campaign untuk melakukan auto follow up hingga closing",
    },
    {
      want: "Bot Auto Response",
      have: "Bisa setting pesan auto respon pada menu bot yang bisa disesuaikan dengan bisnis anda",
    },
    {
      want: "Tag semua member grup otomatis",
      have: "Dripsender memberikan fitur yang membuat Anda bisa melakukan tag semua member di grup WA agar pesan anda bisa dilihat oleh member grup",
    },
    {
      want: "Bisa Integrasi Dengan AI",
      have: "Nah baru nih! Kini Anda bisa mengubah Whatsapp anda dengan AI. Di fitur Drip AI ini, anda bisa juga membuat CS AI dengan menambahkan semua informasi produk anda.",
    },
  ];

  // Initial visible items (2 items)
  const visibleFeatures = isExpanded ? features : features.slice(0, 4);

  return (
    <div className="p-4 mx-auto my-12 max-w-7xl">
      {/* Header */}
      <div className="max-w-2xl mx-auto my-12 sm:text-center">
        <p className="text-3xl font-semibold leading-8 tracking-tighter text-gray-700 dark:text-cyan-300 sm:text-5xl">
          Dripsender Memberikan Solusi Atas Masalah Anda!
        </p>
        <p className="mt-6 text-xl font-light text-gray-700 dark:text-gray-100 sm:text-2xl">Fleksibelitas Menjalankan WhatsApp Marketing</p>
      </div>

      {/* Main Container with relative positioning */}
      <div className="relative overflow-hidden bg-white shadow-lg dark:bg-gray-800 rounded-xl">
        {/* Table Header */}
        <div className="grid grid-cols-3">
          <div className="p-6 bg-cyan-50 dark:bg-cyan-900">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-cyan-800 dark:text-cyan-100">Yang Anda Mau </h3>
          </div>
          <div className="col-span-2 p-6 bg-green-50 dark:bg-green-900">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-green-800 dark:text-green-100">Yang Dripsender Punya</h3>
          </div>
        </div>

        {/* Table Body */}
        <div
          className={`divide-y divide-gray-200 dark:divide-gray-700 transition-all duration-500 ease-in-out ${
            !isExpanded ? "min-h-[200px]" : "max-h-[1000px]"
          } overflow-hidden`}
        >
          {visibleFeatures.map((feature, index) => (
            <div key={index} className="grid grid-cols-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="p-6 border-r border-gray-200 dark:border-gray-700">
                <p className="text-gray-800 dark:text-gray-200">{feature.want}</p>
              </div>
              <div className="col-span-2 p-6">
                <p className="text-gray-800 dark:text-gray-200">{feature.have}</p>
              </div>
            </div>
          ))}

          {/* Gradient Overlay */}
          {!isExpanded && <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-800 to-transparent" />}
        </div>
      </div>

      {/* Show More Button Container - Centered below table */}
      <div className="flex justify-center mt-8 mb-12">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-6 py-3 text-white transition-all duration-300 rounded-full shadow-lg bg-cyan-600 hover:bg-cyan-700"
        >
          <span>{isExpanded ? "Show Less" : "Show More"}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ComparisonTable;
