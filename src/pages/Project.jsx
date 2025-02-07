import React from 'react';
import Bahodir from "../assets/bahodirbuild.jpg";
import Avto from "../assets/autozone.jpg";
import ItTime from "../assets/ittime.png";
import Homekit from "../assets/homekit.jpg";
import Namangan from "../assets/namangan.jpg";
import Uzloyal from "../assets/uzloyal.jpg";
import Propartnyor from "../assets/propartnyor.jpg";
import Zamon from "../assets/zamontour.jpg";
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const projects = [

  { img: Bahodir, url: "https://www.ataevbahodirbuild.uz/", title: "ataevbahodirbuild.uz", desc: "Ataev Bahadir Build - качественные строительные и ремонтные услуги!" },
  { img: Avto, url: "https://www.autozoomrental.com/", title: "autozoomrental.com", desc: "AutoZoomRental - удобный и надежный прокат автомобилей!" },
  { img: ItTime, url: "https://www.it-time-academy.uz/", title: "it-time-academy.uz", desc: "IT Time Academy — место современных ИТ-знаний!" },
  { img: Homekit, url: "https://www.homekit.uz/", title: "homekit.uz", desc: "HomeKit – современные и удобные решения для умного дома!" },
  { img: Uzloyal, url: "https://www.uzloyal.uz/", title: "uzloyal.uz", desc: "UzLoyal – надежная и удобная система лояльности!" },
  { img: Namangan, url: "https://www.namanganoits.uz/", title: "namanganoits.uz", desc: "Наманганская ИТС — центр современных ИТ-знаний и навыков!" },
  { img: Propartnyor, url: "https://www.propartnyor.uz/", title: "propartnyor.uz", desc: "ПроПартнёр — адрес надёжного и эффективного сотрудничества!" },
  { img: Zamon, url: "https://www.zamontour.uz/", title: "zamontour.uz", desc: "ZamonTour – наслаждайтесь туристическим опытом вместе с нами!" }
];

function Project() {
  const { t } = useTranslation()
  return (
    <div className="max-w-[1420px] mx-auto p-4 md:mt-20 mt-15">
      <h1 className='text-5xl text-white text-center font-bold mt-10'>{t('project.title')}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {projects.map((project, index) => (
          <NavLink key={index} to={project.url} className="p-4 rounded-lg hover:scale-105 transition-transform">
            <strong className='text-white block mb-2'>{t(`project.project${index + 1}title`)}</strong>
            <img className="rounded-t-lg w-full h-48 object-cover" src={project.img} alt={project.title} />
            <h5 className="mt-3 text-lg font-normal text-gray-300">{t(`project.desc${index + 1}`)}</h5>
          </NavLink>
        ))}


      </div>
    </div>
  );
}

export default Project;
