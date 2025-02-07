import React, { useEffect, useState } from 'react'
import Logo from "../assets/logofooter.png"
import { useTranslation } from "react-i18next";


function Footer() {
  const { t } = useTranslation()
  const [scrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="bg-black" >
      <div className="max-w-[1420px] flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/"><img className='w-[150px] h-[42px]' src={Logo} alt="" /></a>
        <p className='text-white text-xl font-normal md:mt-0 mt-10' >{t('footer.title')}</p>
      </div>
    </div>
  )
}

export default Footer