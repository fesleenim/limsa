import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShareIcon from '@mui/icons-material/Share';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

function Address() {
  return (
    <div className="max-w-[1420px] mx-auto p-6 mt-20">
      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-10">Контакты</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Chap tomonda aloqa ma'lumotlari */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Manzil */}
          <div className="flex items-center space-x-4 p-5 rounded-lg hover:scale-105 transition-transform ">
            <LocationOnIcon className="text-white" style={{ fontSize: "35px" }} />
            <div>
              <strong className="text-white text-xl">Адрес</strong>
              <p className="mt-1 text-gray-400 text-sm">город Ташкент, Юнусабадский район</p>
            </div>
          </div>

          {/* Telefon */}
          <div className="flex items-center space-x-4 p-5 rounded-lg hover:scale-105 transition-transform ">
            <PhoneInTalkIcon className="text-white" style={{ fontSize: "35px" }} />
            <div>
              <strong className="text-white text-xl">Телефон</strong>
              <a href="tel:+998332587358" className="mt-1 text-gray-400 text-sm block hover:text-gray-200">+998 (33) 258 73 58</a>
            </div>
          </div>

          {/* Ish vaqti */}
          <div className="flex items-center space-x-4 p-5 rounded-lg hover:scale-105 transition-transform ">
            <AccessTimeIcon className="text-white" style={{ fontSize: "35px" }} />
            <div>
              <strong className="text-white text-xl">Рабочее время</strong>
              <p className="mt-1 text-gray-400 text-sm">9:00 - 18:00 (Понедельник-Суббота)</p>
            </div>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div className="flex items-center space-x-4 p-5 rounded-lg hover:scale-105 transition-transform ">
            <ShareIcon className="text-white" style={{ fontSize: "35px" }} />
            <div>
              <strong className="text-white text-xl">Социальные сети</strong>
              <div className="flex space-x-3 mt-1">
                <a href="#" className="text-gray-400 hover:text-white"><LinkedInIcon /></a>
                <a href="#" className="text-gray-400 hover:text-white"><InstagramIcon /></a>
                <a href="#" className="text-gray-400 hover:text-white"><TelegramIcon /></a>
              </div>
            </div>
          </div>
        </div>

        {/* O'ng tomonda xarita */}
        <div className="p-4 bg-[#222222] rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6556552366706!2d69.2856905!3d41.33810059999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2s!4v1738580905340!5m2!1sru!2s"
            width="100%" height="350" allowFullScreen="" loading="lazy" className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Address;
