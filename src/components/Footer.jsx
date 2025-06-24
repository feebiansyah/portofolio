import React from 'react'

const Footer = () => {
  return (
    <div className='mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center'>
        <h1 className='text-2xl font-bold'>Portofolio</h1>
        <div className='flex gap-7'>
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#tools">Tools</a>
            <a href="#proyek">Proyek</a>
            <a href="#kontak">Kontak</a>
        </div>
        <div className='flex items-center gap-3'>
            <a href="https://github.com/feebiansyah" target="_blank" className='ri-github-fill ri-2x'></a>
            <a href="https://instagram.com/a.febiansyah_" target="_blank    " className='ri-instagram-fill ri-2x'></a>
            <a href="https://www.linkedin.com/in/ananda-febiansyah-642036344/" target="_blank" className='ri-linkedin-fill ri-2x'></a>
        </div>
    </div>
  )
}

export default Footer