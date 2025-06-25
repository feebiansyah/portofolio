import React from "react";

function Hero() {
  return (
    <div className="hero flex flex-col items-center text-center pt-10 animate__animated animate__fadeInUp animate__delay-1s">
      <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
        <q>
          Teknologi hanyalah alat, positif dan negative tergantung yang <br />
          mengunakanya.
        </q>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Hallo, Saya <span className="text-blue-500">Ananda Febiansyah</span>
      </h1>
      <p className="text-base md:text-lg max-w-2xl mb-6 opacity-70">
        Saya seorang Web Developer dengan fokus pada pengembangan sistem
        berbasis web menggunakan Laravel dan React.js. Memiliki pengalaman dalam
        membangun aplikasi manajemen dan sistem reservasi digital dengan desain
        yang efisien dan responsif.
      </p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <a
          href="https://drive.google.com/file/d/1lCjdP-ja8C0BmR7VedUXaGWIxrSmlZX4/view?usp=sharing" target="_blank"
          className="bg-blue-700 px-5 py-3 rounded-2xl hover:bg-blue-600 text-sm md:text-base"
        >
          Download CV <i className="ri-download-2-line ri-lg"></i>
        </a>
        <a
          href="#proyek"
          className="bg-zinc-700 px-5 py-3 rounded-2xl hover:bg-zinc-600 text-sm md:text-base"
        >
          Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
        </a>
      </div>
    </div>
  );
}

export default Hero;
