import React from "react";

function Tentang() {
  return (
    <>
      <div id="tentang" className="tentang mt-32 py-10">
        <div className=" w-full xl:w-2/3 lg:w-3/4  mx-auto p-7 bg-zinc-800 rounded-lg" >
          <img
            src="./assets/hero-img.webp"
            className="w-12 rounded-md block mx-auto mb-7 sm:hidden"
            alt=""
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            consectetur reprehenderit mollitia, animi nam veritatis doloremque.
            Eius ullam cum suscipit, consequatur, doloremque, perferendis
            repellat dolor dicta laboriosam magni culpa beatae!
          </p>
          <div className="flex items-center justify-evenly sm:justify-between ">
            <img
              src="./assets/hero-img.webp"
              className="w-12 rounded-md sm:block hidden"
              alt="" loading="lazy"
            />
            <div className="flex items-center gap-10">
              <div>
                <h1 className="text-4xl mb-1">
                  45 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tentang;
