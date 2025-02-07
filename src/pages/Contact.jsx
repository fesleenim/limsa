import React from 'react'
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation()
  return (
    <div id='contact' className="max-w-[1420px] mx-auto p-6 md:mt-20 mt-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Chap tomondagi ma'lumotlar */}
        <div>
          <h1 className="text-white md:text-4xl text-2xl sm:text-5xl font-bold leading-tight">
          {t('contact.title')}
          </h1>
          <p className="text-[#6c2dba] text-xl sm:text-2xl font-normal mt-6 mb-8">
          {t('contact.desc')}
          </p>
          <strong className="text-white text-2xl font-medium">{t('contact.page')}</strong>
          <div className="mt-6 space-y-2">
            <a href="/" className="block text-gray-500 text-lg hover:text-gray-300 transition">{t('contact.pagehome')}</a>
            <a href="/service" className="block text-gray-500 text-lg hover:text-gray-300 transition">{t('contact.service')}</a>
          </div>
        </div>

        {/* O'ng tomondagi form */}
        <div className="p-6 sm:p-10">
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-6">{t('contact.inputtitle')}</h1>
          <form className="space-y-6">
            <input type="text" placeholder={t('contact.name')} className="w-full bg-[#363636] border border-gray-600 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-gray-500 text-white" />
            <input type="text" placeholder="+998912042711" className="w-full bg-[#363636] border border-gray-600 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-gray-500 text-white" />
            <textarea placeholder={t('contact.send')} rows="4" className="w-full bg-[#363636] border border-gray-600 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-gray-500 text-white resize-none"></textarea>
            <button type='submit' className="w-full sm:w-[30%] bg-[#6c2dba] text-white py-3 px-6 rounded-3xl text-lg font-semibold hover:bg-[#4a1f80] transition">
            {t('contact.button')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
