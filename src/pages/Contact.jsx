import React from 'react'

function Contact() {
  return (
    <div id='contact' className="max-w-[1420px] mx-auto p-6 md:mt-20 mt-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Chap tomondagi ma'lumotlar */}
        <div>
          <h1 className="text-white md:text-4xl text-2xl sm:text-5xl font-bold leading-tight">
            Закажите сайт для своего бизнеса сейчас и получите от нас небольшой подарок со скидкой 10%!
          </h1>
          <p className="text-[#6c2dba] text-xl sm:text-2xl font-normal mt-6 mb-8">
            Удовлетворение каждого клиента — наша высшая цель — LIMSA
          </p>
          <strong className="text-white text-2xl font-medium">Страницы</strong>
          <div className="mt-6 space-y-2">
            <a href="/" className="block text-gray-500 text-lg hover:text-gray-300 transition">Главная</a>
            <a href="/service" className="block text-gray-500 text-lg hover:text-gray-300 transition">Наши услуги</a>
          </div>
        </div>

        {/* O'ng tomondagi form */}
        <div className="p-6 sm:p-10">
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-6">Оставьте свои данные</h1>
          <form className="space-y-6">
            <input type="text" placeholder="ваше имя" className="w-full bg-[#363636] border border-gray-600 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-gray-500 text-white" />
            <input type="text" placeholder="+998912042711" className="w-full bg-[#363636] border border-gray-600 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-gray-500 text-white" />
            <textarea placeholder="Ваше сообщение" rows="4" className="w-full bg-[#363636] border border-gray-600 rounded-2xl p-3 outline-none focus:ring-2 focus:ring-gray-500 text-white resize-none"></textarea>
            <button type='submit' className="w-full sm:w-[30%] bg-[#6c2dba] text-white py-3 px-6 rounded-3xl text-lg font-semibold hover:bg-[#4a1f80] transition">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
