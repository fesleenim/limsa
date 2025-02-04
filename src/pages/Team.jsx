import React from 'react';
import DevicesIcon from '@mui/icons-material/Devices';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import LanguageIcon from '@mui/icons-material/Language';

const team = [
  { icon: <DevicesIcon className="text-white block" style={{ fontSize: "75px" }} />, number: "01 ", title: "Адаптивный", desc: "Сайты, которые мы создаем, будут гибкими. То есть у них будет планшетная и мобильная версия. За это не будет отдельной оплаты." },
  { icon: <AdminPanelSettingsIcon className="text-white block" style={{ fontSize: "75px" }} />, number: "02", title: "Администратор" ,desc:"Ваш сайт будет иметь удобную и простую админ-панель, которая позволит вам управлять сайтом изнутри.", },
  { icon: <HealthAndSafetyIcon className="text-white block" style={{ fontSize: "75px" }} />, number: "03", title: "Защита", desc: "Наши веб-сайты защищены современными антивирусами и брандмауэрами для защиты от спам-ботов и атак." },
  { icon: <HeadsetMicIcon className="text-white block" style={{ fontSize: "75px" }} />, number: "04", title: "Мониторинг 24/7", desc: "Ваш веб-сайт автоматически контролируется онлайн 24 часа в сутки, чтобы поддерживать его работоспособность." },
  { icon: <DomainVerificationIcon className="text-white block" style={{ fontSize: "75px" }} />, number: "05", title: "Домен и хостинг" ,desc:"Домен и хостинг бегают, забудьте о головной боли. У нас есть домен UZ и хостинг бесплатно на 6 месяцев (затем $10/мес)", },
  { icon: <LanguageIcon className="text-white block" style={{ fontSize: "75px" }} />, number: "06", title: "Уникальный", desc: "Дизайн каждого создаваемого нами сайта будет уникальным и выделяться среди других сайтов. Один дизайн — один сайт!" },
];

function Team() {
  return (
    <div className="max-w-[1420px] mx-auto p-4 md:mt-20 mt-15">
      <h1 className='md:text-5xl mt-10 text-3xl w-[75%] text-white mx-auto font-bold text-center'>Почему мы? Почему большинство людей выбирают нас?</h1>
      <p className='md:text-5xl text-3xl text-center text-[#6c2dba] font-bold mt-8'>Наши преимущества</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15'>
        {team.map((team, index) => (
          <div key={index} className="bg-[#121212] p-9 rounded-lg flex flex-col justify-baseline hover:scale-105 transition-transform">
            <div className='flex justify-between items-center'>
              <div className='w-[10%]'>
                {team.icon}
                <strong className="block mt-2 text-gray-300 text-2xl ">{team.number}</strong>
              </div >
              <div className='w-[75%]'>
                <strong className='text-white mt-4 text-xl'>{team.title}</strong>
                <p className="mt-2 text-gray-500 text-sm ">{team.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
