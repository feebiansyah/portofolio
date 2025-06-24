import React from "react";

function Kontak() {
  return (
    <>
      <div id="kontak" className="kontak mt-32 md:p-10 p-0">
        <h1 className="text-4xl mb-2 font-bold text-center"  data-aos="fade-up">kontak</h1>
        <p className="text-base/loose opacity-50 text-center"  data-aos="fade-up" data-aos-delay="200">
          Mari terhubung dengan saya
        </p>

        <form
          action="https://formsubmit.co/aa6109496e033234063b78197fcab83f"
          method="post"
          className="bg-zinc-800 p-10 w-full md:w-fit mx-auto rounded-md mt-10"
          autoComplete="off"
           data-aos="fade-up" data-aos-delay="400"
        >
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-semibold text-sm md:text-base">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Nama..."
                required
                className="border text-sm md:text-base border-zinc-500 p-2 rounded-md  focus:border-violet-600 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-semibold text-sm md:text-base">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email.."
                required
                className="border text-sm md:text-base border-zinc-500 p-2 rounded-md  focus:border-violet-600 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold text-sm md:text-base">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Masukan Pesan..."
                required
                className="border text-sm md:text-base border-zinc-500 p-2 rounded-md focus:border-violet-600 focus:outline-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="font-semibold focus:border-violet-600 focus:outline-none mt-4 text-sm md:text-base bg-violet-700 p-3 rounded-lg block border w-full cursor-pointer border-zinc-600 hover:bg-violet-600"
                type="submit"
              >
                Kirim Pesan!
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Kontak;
