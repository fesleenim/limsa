import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Address from './Address'
import Contact from './Contact'
import 'aos/dist/aos.css';
import Aos from 'aos'
import Question from './Question'
import Team from './Team'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from './Hero';
import Project from './Project';

function HomePages() {
  useEffect(() => {
    // Sahifa yuklanishi bilan yuqoriga qaytarish

    // AOS animatsiyasini ishga tushirish
    Aos.init({
      duration: 1000,  // Animatsiya davomiyligi
      once: true,  // Faqat bir marta animatsiya bo'lishi (scroll noto‘g‘ri tushmasligi uchun)
      offset: 200,  // Animatsiya qachon boshlanishi
    });

    Aos.refresh(); // Aos'ni yangilash
  }, []);
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/bagkround.jpg')" }}
      >
        <Header />
        <Hero />
      </div>
      <main className='dark:bg-[#161616]'>
        <Question />
        <Project />
        <Team />
      </main>
    </div>
  )
}

export default HomePages