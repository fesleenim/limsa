import React from 'react'
import HeroImg from '../assets/heroimg.png'

function Hero() {
    return (
        <div className=" dark:bg-gray-900">
            <div className="max-w-[1420px] mx-auto md:mt-[90px]">
                <div className="flex flex-col md:flex-row justify-between items-center  ">
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="md:w-[40%] w-[90%] md:text-start text-center md:mt-0 mt-30 ">
                        <h1 className="md:text-3xl text-2xl text-white font-medium">
                            ИДЕАЛЬНЫЕ 'IT' РЕШЕНИЯ ДЛЯ РАЗВИТИЯ ВАШЕГО БИЗНЕСА!
                        </h1>
                        <p className="md:text-lg sm:text-[14px] text-white mt-5">
                            Доверьте свой проект специалистам с более чем 10-
                            летним опытом и добейтесь высокого успеха за короткий  период времени.
                        </p>
                        <a href="#contact">
                            <button
                                type="button"
                                className="my-5 text-white bg-[#6c2dba] hover:border hover:border-[#6c2dba] hover:bg-transparent focus:outline-none font-medium rounded-2xl text-xl px-4 py-2 text-center"
                            >
                                Контакт
                            </button>
                        </a>
                    </div>
                    <div data-aos="fade-down" className="md:w-[60%] w-[90%] block mt-5 md:mt-20 my-[100px]">
                        <img className="w-full" src={HeroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero