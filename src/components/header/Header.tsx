// @ts-nocheck

"use client";

import React, { useEffect } from "react";
import CTA from "./CTA";
import "./header.css";
import Me from "../../assets/me31.png";
import HeaderSocials from "./HeaderSocials";
import AOS from "aos";
import "aos/dist/aos.css";

import Typewriter from "typewriter-effect";
import { Spotlight } from "../ui/Spotlight";
import ImageB from "@/components/ImageB";
import Stickers from "./stickers";

const Header = ({ firstRef }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    const HEADING = document.querySelector("h1");

    const CONFIG = {
      text: "Alireza soltanian",
      accent: "#e619a1",
      probability: 0.1,
    };
    let splitters = "";
    const flickIndex = Math.floor(Math.random() * (CONFIG.text.length + 1));
    for (let c = 0; c < CONFIG.text.length; c++) {
      const flick = Math.random() < CONFIG.probability || c === flickIndex;
      const speed = Math.random() * (4 - 1) + 1;
      const delay = Math.random() * 5;
      console.log(CONFIG.text[c]);

      // You can generate the custom flicker for each letter
      const seedEase = `rough({ template: power1.inOut, strength: 2, points: 50, taper: 'none', randomize: true, clamp: true})`;
      // const customEase = generateCustomEase(seedEase, 0.0005, 4, 0.25);

      splitters += `<span ${
        flick ? `data-flick="true"  --speed:${speed}; --delay:${delay};"` : ""
      }aria-hidden="true" >${CONFIG.text[c]}</span>`;
    }
    HEADING.innerHTML = `
    ${splitters}
    <span class="sr-only">${CONFIG.text}</span>
  `;
  }, []);
  return (
    <header ref={firstRef} id='first' className='overflow-hidden'>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20'
        fill='white'
      />
      <div className='container header__container  flex flex-col items-center'>
        {/* <h5 data-aos="zoom-in-down" data-aos-duration="1500" >Hello I'm</h5>
        <h1 data-aos="zoom-in-down" data-aos-duration="1500">Soltanian</h1>
        <h5 className="text-light"  data-aos="zoom-in-down" data-aos-duration="1000">Fullstack Developer</h5> */}

        {/* <Typewriter
          className='text-xl'
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span className="bg-slate-800">Hello World</span>')
              .pauseFor(25)
              .typeString(".")
              .deleteAll()
              .typeString("I'm frontend developer")
              .pauseFor(25)
              .deleteAll()
              .typeString(
                " (Nextjs & Typescript ... (another be experience page)) "
              )
              .deleteAll()
              .typeString("&")
              .deleteAll()
              .typeString("Web3 developer (solidity & Hardhat ...)")
              .start();
          }}
        /> */}
        <h1 id='header-flicker' className='flicker' />

        <CTA />
        <HeaderSocials />
        <div className='absolute flex justify-center items-center w-full h-fit mt-56'>
          <Stickers />
        </div>
        <div
          // data-aos='zoom-in'
          // data-aos-easing='ease-out-cubic'
          // data-aos-duration='500'
          className='me  z-30 overflow-hidden h-[400px] w-[320px] flex justify-center mt-4 '
        >
          <ImageB
            src={Me}
            alt=''
            className='w-full rounded-t-full h-full inset-0  object-cover '
          />
        </div>
        <a href='#contact' className='scroll__down'>
          scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
