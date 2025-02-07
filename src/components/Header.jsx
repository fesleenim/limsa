import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from '../i18'

function Header() {
  const [scrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation()
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed ${scrolled ? "bg-black" : "dark:bg-gray-900"
          } top-0 left-0 right-0 z-50`}
      >
        <div className="max-w-[1420px] flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center justify-between">
            <a href="https://flowbite.com/" className="space-x-3 rtl:space-x-reverse">
              <img src={Logo} className="h-8" alt="Limsa Logo" />
            </a>
            <div className="md:flex items-center justify-between w-full md:w-auto md:order-1 ml-5 mt-2 hidden">
              <ul className="flex flex-col font-medium p-5 md:p-0 mt-10 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-3 md:border-0">
                <li>
                  <NavLink to="/" className="block py-2 px-3 md:p-0 text-white bg-[#6c2dba] rounded-sm md:bg-transparent md:text-[#6c2dba] md:dark:text-[#6c2dba]"
                    aria-current="page">{t('header.home')}</NavLink>
                </li>
                <li>
                  <NavLink to="/service" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm md:hover:bg-transparent md:hover:text-[#6c2dba] md:dark:hover:text-[#6c2dba] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >{t('header.services')}</NavLink>
                </li>
                <li>
                  <NavLink to="/project" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm md:hover:bg-transparent md:hover:text-[#6c2dba] md:dark:hover:text-[#6c2dba] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >{t('header.work')}</NavLink>
                </li>
                <li>
                  <NavLink to="/prices" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm md:hover:bg-transparent md:hover:text-[#6c2dba] md:dark:hover:text-[#6c2dba] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >{t('header.price')}</NavLink>
                </li>
                <li>
                  <form className="max-w-sm mx-auto">
                    <select value={i18n.language}
                      id="countries" onChange={(e) => changeLanguage(e?.target.value)}
                      className="border text-gray-900 text-sm rounded-lg focus:[#6c2dba] focus:border-[#6c2dba] block w-full  dark:placeholder-[#6c2dba] dark:text-[#6c2dba] dark:focus:ring-[#6c2dba] dark:focus:border-[#6c2dba]"
                    >
                      <option value="uz">UZ</option>
                      <option value="ru">Py</option>
                      <option value="eng">Eng</option>
                    </select>
                  </form>
                </li>
              </ul>
            </div>
          </div>

          {/* Gamburger (Mobil uchun menyu ochish) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"

          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className=' text-white' />
          </button>

          <div
            className={`md:flex sm:order-2 md:space-x-3 rtl:space-x-reverse hidden`}
          >
            <a href="tel:+998912042711" className="md:">
              <button
                type="button"
                className="text-white bg-[#6c2dba] hover:border hover:border-[#6c2dba] hover:bg-transparent focus:outline-none font-medium rounded-2xl text-sm px-6 py-3 text-center"
              >
                +998 (33) 258 73 58
              </button>
            </a>
          </div>
        </div>

        {/* Menyu - faqat mobil uchun */}
        <div
          className={`md:hidden fixed top-0 right-0 bg-gray-800 bg-opacity-75 w-2/3 h-full transform ${menuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl"
            >
              &times; {/* X tugmasi */}
            </button>
          </div>
          <ul className="flex flex-col p-5 space-y-6 mt-10">
            <li>
              <NavLink to="/" className="block py-2 px-3 md:p-0 text-white bg-[#6c2dba] rounded-sm md:bg-transparent md:text-[#6c2dba] md:dark:text-[#6c2dba]"
                aria-current="page">{t('header.home')}</NavLink>
            </li>
            <li>
              <NavLink to="/service" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm md:hover:bg-transparent md:hover:text-[#6c2dba] md:dark:hover:text-[#6c2dba] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{t('header.services')}</NavLink>
            </li>
            <li>
              <NavLink to="/project" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm md:hover:bg-transparent md:hover:text-[#6c2dba] md:dark:hover:text-[#6c2dba] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{t('header.work')}</NavLink>
            </li>
            <li>
              <NavLink to="/prices" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm md:hover:bg-transparent md:hover:text-[#6c2dba] md:dark:hover:text-[#6c2dba] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{t('header.price')}</NavLink>
            </li>
            <li>
              <form className="max-w-sm mx-auto">
                <select
                  value={i18n.language}
                  id="countries" onChange={(e) => changeLanguage(e?.target.value)}
                  className="border  text-sm rounded-lg focus:[#6c2dba] focus:border-[#6c2dba] block w-full p-2.5  dark:border-[#6c2dba] dark:placeholder-[#6c2dba] dark:text-[#6c2dba] dark:focus:ring-[#6c2dba] dark:focus:border-[#6c2dba]"
                >
                  <option value="uz">UZ</option>
                  <option value="ru">Py</option>
                  <option value="eng">Eng</option>
                </select>
              </form>
            </li>
          </ul>
        </div>

        <hr className="w-full h-1 bg-gray-700" />
      </nav>
    </>
  );
}

export default Header;
