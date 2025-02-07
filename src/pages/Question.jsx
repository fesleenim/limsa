import React from 'react';
import ImgBoy from "../assets/ImgBoy.png";
import ImgGirl from "../assets/ImgGirll.png";
import Marquee from "react-fast-marquee";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useTranslation } from "react-i18next";
import i18n from '../i18'

function Question() {
  const { t } = useTranslation()
  return (
    <>
      <div className="dark:bg-[#161616]">
        <div className="max-w-[1420px] mx-auto">
          <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center">
            <div className='flex justify-between md:w-[45%] w-[90%] mt-[150px]'>
              <img className='w-[48%] h-[450px]' src={ImgBoy} alt="Boy" />
              <img className='w-[49%] h-[470px] mt-10' src={ImgGirl} alt="Girl" />
            </div>
            <div id="accordion-collapse" data-accordion="collapse" className='md:w-[45%] w-[90%]'>
              <h1 className='text-5xl font-medium text-white mb-10'>{t('question.title')}</h1>
              <div>
                {/* 1-Accordion */}
                <Accordion sx={{ backgroundColor: "transparent", border: "2px solid #4a4a4a", borderRadius: "10px", mb: 2 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography sx={{ color: "white", fontWeight: "bold" }}>{t('question.accordion1')}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ color: "white" }}>
                  {t('question.accordion1_')}
                  </AccordionDetails>
                </Accordion>

                {/* 2-Accordion */}
                <Accordion sx={{ backgroundColor: "transparent", border: "2px solid #4a4a4a", borderRadius: "10px", mb: 2 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography sx={{ color: "white", fontWeight: "bold" }}>{t('question.accordion2')}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ color: "gray" }}>
                  {t('question.accordion2_')}                  </AccordionDetails>
                </Accordion>

                {/* 3-Accordion */}
                <Accordion sx={{ backgroundColor: "transparent", border: "2px solid #4a4a4a", borderRadius: "10px" }} defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "gray" }} />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography sx={{ color: "white", fontWeight: "bold" }}>{t('question.accordion3')}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ color: "gray" }}>
                  {t('question.accordion3_')}                  </AccordionDetails>
                  <AccordionActions>
                    <a href="#contact">
                    <Button sx={{ color: "white" }}>Согласен</Button>
                    </a>
                  </AccordionActions>
                </Accordion>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <Marquee direction="right" speed={200}>
            <div className="mt-30 md:flex hidden gap-[50px]">
              <strong className='text-3xl text-white'>{t('marquae.title1')}</strong>
              <p className='text-xl text-white'>/</p>
              <strong className='text-3xl text-white'>{t('marquae.title2')}</strong>
              <p className='text-xl text-white'>/</p>
              <strong className='text-3xl text-white'>{t('marquae.title3')}</strong>
              <p className='text-xl text-white'>/</p>
              <strong className='ml-[20px] text-3xl text-white'>{t('marquae.title4')}</strong>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default Question;
