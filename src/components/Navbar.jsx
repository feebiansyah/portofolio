"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
function Navbar() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar py-5 items-center flex justify-between">
      <div className="logo">
        <h1 className="text-3xl hidden md:block font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          Portofolio
        </h1>
      </div>
      <ul
        className={`menu flex gap-4 sm:gap-10 items-center md:static fixed left-1/2 
          -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 
          rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all duration-500 md:transition-none z-10
          ${active ? "top-0 opacity-100" : "-top-10 opacity-0"} `}
      >
        <li>
          <a href={"#beranda"} className="sm:text-lg text-base font-medium">
            Beranda
          </a>
        </li>
        <li>
          <a href={"#tentang"} className="sm:text-lg text-base font-medium">
            Tentang
          </a>
        </li>
        <li>
          <a href={"#tools"} className="sm:text-lg text-base font-medium">
            Tools
          </a>
        </li>
        <li>
          <a href={"#proyek"} className="sm:text-lg text-base font-medium">
            Proyek
          </a>
        </li>
        <li>
          <a href={"#kontak"} className="sm:text-lg text-base font-medium">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
