import React from "react";

function Hero() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1 ">
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800  w-fit p-4 rounded-2xl">
            <q>Kode yang indah, lahir dari ketekunan.</q>
          </div>
          <h1 className="text-5xl/tight mb-6 font-bold ">
            Hallo, Saya Ananda Febiansyah
          </h1>
          <p className="text-base/lose mb-6 opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui
            molestiae iste similique, placeat soluta pariatur minus consequatur
            commodi. Excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, assumenda!
          </p>
          <div className="flex items-center gap-2 sm:gap-4 ">
            <a href="" className="bg-violet-700 p-3 md:p-4 rounded-2xl hover:bg-violet-600 text-sm md:text-base">
                Download CV <i className="ri-download-2-line ri-lg"></i>
            </a>
            <a href="" className="bg-zinc-700 p-3 md:p-4 rounded-2xl hover:bg-zinc-600  text-sm md:text-base">
                Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src="./assets/hero-img.webp" alt="" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2s" />
      </div>
    </>
  );
}

export default Hero;
