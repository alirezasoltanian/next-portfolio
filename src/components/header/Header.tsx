// @ts-nocheck

"use client";

import React, { useEffect } from "react";
import CTA from "./CTA";
import "./header.css";
import Me from "../../assets/me31.png";
import HeaderSocials from "./HeaderSocials";
import AOS from "aos";
import "aos/dist/aos.css";

import { Spotlight } from "../ui/Spotlight";
import ImageB from "@/components/ImageB";
import Stickers from "./stickers";

const Header = ({ firstRef }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const HEADING = document.getElementById("header-flicker");

    const CONFIG = {
      text: "Alireza Soltanian",
      accent: "#e619a1",
      probability: 0.1,
    };

    // Create the flicker effect only once
    const flickerText = (text) => {
      let splitters = "";
      const flickIndex = Math.floor(Math.random() * text.length);

      for (let c = 0; c < text.length; c++) {
        const flick = Math.random() < CONFIG.probability || c === flickIndex;
        const speed = Math.random() * (4 - 1) + 1;
        const delay = Math.random() * 5;

        splitters += `<span ${
          flick
            ? `data-flick="true" style="--speed:${speed}; --delay:${delay};"`
            : ""
        } aria-hidden="true">${text[c]}</span>`;
      }

      return splitters;
    };

    // Set the content of the header with the flicker effect applied
    HEADING.innerHTML =
      flickerText(CONFIG.text) + `<span class="sr-only">${CONFIG.text}</span>`;
  }, []);

  return (
    <header ref={firstRef} id="first" className="overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="container header__container  flex flex-col items-center">
        <h1 id="header-flicker" className="flicker " />
        {/* <h1 id='header-flicker' className='flickerfull '>
          Alireza soltanian
        </h1> */}

        <CTA />
        <HeaderSocials />
        {/* <div className="absolute flex justify-center items-center w-full h-fit mt-72">
          <Stickers />
        </div> */}
        <div className="me  z-30 overflow-hidden h-[400px] w-[320px] flex justify-center mt-4 ">
          <ImageB
            src={Me}
            alt=""
            className="w-full rounded-t-full h-full inset-0  object-cover "
          />
        </div>
        <a href="#portfolio" className="scroll__down">
          scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
