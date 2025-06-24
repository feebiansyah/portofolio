import React from "react";
import { listTools } from "./../data";

function Tools() {
  return (
    <>
      <div id="tools" className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4 text-center"  data-aos="fade-up">Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 text-center mx-auto"  data-aos="fade-up" data-aos-delay="200">
          Berikut ini adalah tools yang biasa saya gunakan untuk pembuatan
          Website
        </p>
        <div className="tools-box mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {listTools.map((tool) => {
            return (
              <div
                key={tool.id}
                className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md  hover:bg-zinc-800"
                 data-aos="fade-up" data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="bg-zinc-800 p-1 w-14 group-hover:bg-zinc-900 "
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tools;
