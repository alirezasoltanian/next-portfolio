// @ts-nocheck

import React, { useRef } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import ImageB from "@/components/ImageB";

const Experience = ({ experienceRef }) => {
  // justMove
  const baseVelocity = -100;
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(1, -30, v)}%`);
  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (20 / 50000);
    baseX.set(baseX.get() + moveBy);
  });
  // justMove
  return (
    <section ref={experienceRef} className='experiencemain' id='experience'>
      {/* <h5 className='experience-titre'>چه مهارت هایی دارم</h5> */}
      <motion.div
        style={{
          x,
          display: "flex",
          justifyContent: "space-between",
          width: "2000px",
        }}
      >
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/react.png'
          alt="alirezasoltanian's GitHub stats"
          style={{ width: "33px", height: "33px" }}
        />
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg'
          alt="alirezasoltanian's GitHub stats"
          style={{ width: "33px", height: "33px" }}
        />
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/javascript.png'
          style={{ width: "33px", height: "33px" }}
          alt='HTML5'
        />
        <ImageB
          width={360}
          height={360}
          src='https://github.com/MacroPower/MacroPower/raw/master/img/typescript-original.svg'
          style={{ width: "33px", height: "33px" }}
          alt='react'
        />
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg'
          alt="alirezasoltanian's GitHub stats"
          style={{ width: "33px", height: "33px" }}
        />
        <ImageB
          width={360}
          height={360}
          src='https://w7.pngwing.com/pngs/895/275/png-transparent-solidity-ethereum-smart-contract-blockchain-cryptocurrency-blockchain-angle-triangle-logo.png'
          style={{ width: "33px", height: "33px" }}
          alt='HTML5'
        />
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg'
          style={{ width: "33px", height: "33px" }}
          alt='javascript'
        />
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg'
          style={{ width: "33px", height: "33px" }}
          alt='CSS3'
        />
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg'
          style={{ width: "33px", height: "33px" }}
          alt='Sass'
        />
        <ImageB
          width={360}
          height={360}
          src='https://img.icons8.com/color/48/000000/wordpress.png'
          style={{ width: "33px", height: "33px" }}
          alt='wordpress'
        />
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg'
          style={{ width: "33px", height: "33px" }}
          alt='Figma'
        />
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/react.png'
          alt="alirezasoltanian's GitHub stats"
          style={{ width: "33px", height: "33px" }}
        />
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg'
          alt="alirezasoltanian's GitHub stats"
          style={{ width: "33px", height: "33px" }}
        />
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/javascript.png'
          style={{ width: "33px", height: "33px" }}
          alt='HTML5'
        />
        <ImageB
          width={360}
          height={360}
          src='https://github.com/MacroPower/MacroPower/raw/master/img/typescript-original.svg'
          style={{ width: "33px", height: "33px" }}
          alt='react'
        />
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg'
          alt="alirezasoltanian's GitHub stats"
          style={{ width: "33px", height: "33px" }}
        />
        <ImageB
          width={360}
          height={360}
          src='https://w7.pngwing.com/pngs/895/275/png-transparent-solidity-ethereum-smart-contract-blockchain-cryptocurrency-blockchain-angle-triangle-logo.png'
          style={{ width: "33px", height: "33px" }}
          alt='HTML5'
        />
        <ImageB
          width={360}
          height={360}
          src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg'
          style={{ width: "33px", height: "33px" }}
          alt='javascript'
        />
      </motion.div>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div
          data-aos-duration='1000'
          data-aos='fade-right'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
          className='experience__frontend'
        >
          <h3>Frontend Developer</h3>
          <div className='experience__content overflow-hidden'>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>NEXTJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>TYPESCRIPT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>MaterialUI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>GraphQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>FRAMER-MOTION</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>PWA</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>figma</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </artifact>
            <div class='absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/10%),transparent)]'></div>

            <div class='absolute h-full w-full bg-[url(https://lunarui.dev/twitter/noise.png)] bg-[size:96px] bg-repeat opacity-[0.025]'></div>

            <div class='absolute inset-0 h-44 w-full overflow-hidden'>
              <div class='absolute -top-1/2 h-full w-full'>
                <div class='relative flex h-full w-full items-center justify-center [--duration:1.5s] [--scale:1.25] [--baseSize:80px] [--sizeStep:64px] [--opacityStep:0.05] [--baseOpacity:0.25]'>
                  <div class='absolute size-[calc(var(--baseSize)+var(--sizeStep)*var(--i))] animate-ripple rounded-full border border-dashed border-white/50 bg-white/5 opacity-[calc(var(--baseOpacity)-var(--opacityStep)*var(--i))] [--i:0]'></div>

                  <div class='absolute size-[calc(var(--baseSize)+var(--sizeStep)*var(--i))] animate-ripple rounded-full border border-dashed border-white/50 bg-white/5 opacity-[calc(var(--baseOpacity)-var(--opacityStep)*var(--i))] [--i:1]'></div>

                  <div class='absolute size-[calc(var(--baseSize)+var(--sizeStep)*var(--i))] animate-ripple rounded-full border border-dashed border-white/50 bg-white/5 opacity-[calc(var(--baseOpacity)-var(--opacityStep)*var(--i))] [--i:2]'></div>

                  <div class='absolute size-[calc(var(--baseSize)+var(--sizeStep)*var(--i))] animate-ripple rounded-full border border-dashed border-white/50 bg-white/5 opacity-[calc(var(--baseOpacity)-var(--opacityStep)*var(--i))] [--i:3]'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos-duration='1000'
          data-aos='fade-left'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
          className='experience__backend'
        >
          <h3>Block chain</h3>
          <div className='experience__content'>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>SOLIDITY</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>Truffle</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>Hard hat</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>Etherjs</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </artifact>
            <artifact className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div>
                <h4>Web3js</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </artifact>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
