import React from "react";
import { listProyek } from "./../data";

function Proyek() {
  return (
    <>
      <div id="proyek" className="proyek mt-32 py-10">
        <h1 className="text-4xl text-center font-bold mb-2"  data-aos="fade-up">Proyek</h1>
        <p className="text-base/loose opacity-50 text-center"  data-aos="fade-up" data-aos-delay="200">
          Berikut ini beberapa proyek yang telah saya buat.
        </p>
        <div className="proyek-box mt-10 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          {listProyek.map((proyek) => {
            return (
              <div
                key={proyek.id}
                className="proyek-card p-4 bg-zinc-800 rounded-md overflow-hidden flex flex-col"  data-aos="fade-up" data-aos-delay={proyek.dad}
              >
                <img src={proyek.gambar} alt="" className="w-full" loading="lazy" />
                <div className="flex flex-col flex-grow">
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-sm/loose md:text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => {
                        return (
                            <p className="text-sm md:text-base md:py-1 md:px-3 py-0.5 px-2 border bg-zinc-600 border-zinc-500 rounded-md font-semibold" key={index}>{tool}</p>
                        )
                    })}
                  </div>
                  <div className="mt-auto  text-center">
                    <a href="#" className="mt-4 text-sm md:text-base bg-sky-700 p-3 rounded-lg block border border-zinc-600 hover:bg-sky-600">Lihat Demo</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Proyek;
