import React from "react";

function Tentang() {
  return (
    <div id="tentang" className="tentang mt-32 py-10">
      <div className="w-full xl:w-2/3 lg:w-3/4 mx-auto p-7 bg-zinc-800 rounded-lg">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Tentang Saya
        </h2>

        {/* Deskripsi */}
        <p className="text-base md:text-lg leading-relaxed mb-10 text-center opacity-80">
          Saya adalah seorang Full Stack Web Developer yang memiliki minat besar pada pengembangan aplikasi berbasis web. 
          Terbiasa menggunakan Laravel dan React.js untuk membangun sistem yang efisien, responsif, dan mudah digunakan. 
          Saya percaya bahwa teknologi yang baik adalah yang memberikan solusi nyata dan pengalaman terbaik bagi pengguna.
        </p>

      </div>
    </div>
  );
}

export default Tentang;
