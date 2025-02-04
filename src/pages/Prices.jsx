import React, { useRef } from "react";
import { Check } from "lucide-react";

const pricingOptions = [
  {
    title: "ЦЕНДОВАЯ СТРАНИЦА",
    description:
      "Другое название одностраничного сайта — целевая страница. Страница проста в использовании и знакомит клиента с необходимой информацией.",
    features: [
      "Домен УЗ",
      "Защита 24/7",
      "Продолжительность 3 дня",
      "Количество страниц 1",
    ],
  },
  {
    title: "КАРТОЧКА САЙТА",
    description:
      "Это «визитная карточка» компании в Интернете. Цель сайта — представить услуги или продукты компании людям, посещающим бизнес-страницу.",
    features: [
      "Домен УЗ",
      "Защита 24/7",
      "Продолжительность 3-7 дней",
      "Количество страниц 2-4",
    ],
  },
  {
    title: "Эксклюзив",
    description:
      "Этот сайт создан по вашему заказу. Вы можете заказать любой сайт по вашему желанию.",
    features: [
      "Домен УЗ",
      "Защита 24/7",
      "Количество языков — желательно",
      "Высокий уровень дизайна",
    ],
  },
];

function PricingCards() {


  return (
    <div className="max-w-[1420px] mx-auto p-4 md:mt-20 mt-15">
      <h1 className="text-5xl text-white text-center font-bold mt-10 mb-10">
        Наши недавние проекты
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="bg-[#121212] border border-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-purple-400 text-2xl font-bold mb-4">
                {option.title}
              </h2>
              <p className="text-gray-400 mb-6">{option.description}</p>
              <ul className="space-y-2 mb-6">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check className="text-purple-500 mr-2" size={20} />{" "}
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <button className="text-purple-400 font-bold underline">
                  Договориться
                </button>
               <a href="#contact">
               <button
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
                >
                  Разместить заказ
                </button>
               </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
