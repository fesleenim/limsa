import React, { useEffect } from 'react'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import 'aos/dist/aos.css';
import Aos from 'aos'
import HomePages from './pages/Home';
import Contact from './pages/Contact';
import Address from './pages/Address';

function App() {
  useEffect(() => {
    // Sahifa yuklanishi bilan yuqoriga qaytarish
    window.scrollTo(0, 0);

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
      <Header />
      <main className='dark:bg-[#161616]'>
        <Outlet />
        <Contact />
        <Address />
      </main>
      <Footer />
    </div>
  )
}

export default App