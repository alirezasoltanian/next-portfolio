// @ts-nocheck

"use client";

import React, { useEffect } from "react";
import CTA2 from "./CTA2";
import "./header2.css";
import Me from "../../assets/me31.png";
import HeaderSocials2 from "./HeaderSocials2";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageB from "@/components/ImageB";
import { Spotlight } from "../ui/Spotlight";
const Header = ({ firstRef }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <header ref={firstRef} id="first" className="overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="container header__container  flex flex-col items-center">
        <h1 id="header-flicker" className="flickerfull font-[Kalameh]">
          <span>علیرضا سلطانیان</span>
        </h1>
        <CTA2 />
        <HeaderSocials2 />
        <div
          // data-aos='zoom-in'
          // data-aos-easing='ease-out-cubic'
          data-aos-duration="500"
          className="me   overflow-hidden h-[400px] w-[320px] flex justify-center mt-4 "
        >
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
