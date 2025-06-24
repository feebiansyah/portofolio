'use client';
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Kontak from "@/components/Kontak";
import Navbar from "@/components/Navbar";
import PreLoader from "@/components/PreLoader";
import Proyek from "@/components/Proyek";
import Tentang from "@/components/Tentang";
import Tools from "@/components/Tools";
import "remixicon/fonts/remixicon.css";
import "animate.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <PreLoader />
      <div className="container p-3 mx-auto overflow-x-hidden">
        <Navbar />
        <Hero />
        <Tentang />
        <Tools />
        <Proyek />
        <Kontak />
        <Footer />
      </div>
    </>
  );
}
