"use client";

import React, { useEffect, useState } from "react";
import "./portfolio2.css";
import IMG1 from "/public/assets/Slicwee1.png";

import IMG4 from "/public/assets/DribbbleshotHD-1.png";
import IMG5 from "/public/assets/Slic12e2.png";
import IMG6 from "/public/assets/DribbbaleshotHD-2.png";
import IMG7 from "/public/assets/DribbbleasasasshotHD-4.png";
import IMG8 from "/public/assets/DribbbleshotHDbridge-3.png";
import IMG9 from "/public/assets/DribbbleshotHD-5.png";
import IMG10 from "/public/assets/DribbbleshotHD-6.png";
import IMG11 from "/public/assets/noghteKhatImg.png";
import IMG12 from "/public/assets/framer.png";

import { AnimatePresence, motion } from "framer-motion";
const random = [
  //0
  {
    id: 11,
    image: IMG11,
    name: "frontend",
    title:
      "Tools : Nextjs13 , Typescript , mantine , zustand , tailwind , Axios , yup , lodash  ",
    disable: 'code demo',
    
      github: "https://github.com/Alirezas7ss",
    demo: "https://noghteh-khat.ir/",
  },
  {
    id: 12,
    image: IMG12,
    name: "frontend",
    title: "Tools : Nextjs13 , Typescript , Framer-motion , Tailwind  ",
    disable: '',
    
    github: "https://github.com/Alirezas7ss",
    demo: "https://framer-motion-page.vercel.app/",
  },
  //1
  {
    id: 1,
    image: IMG1,
    name: "frontend",
    title: "Tools : React , Javascript , Axios , React-router-dom , Swiper  ",
    disable: '',
    
    github: "https://github.com/Alirezas7ss/Responsive_Store-",
    demo: "https://responsive-store.vercel.app/home",
  },

  // {
  //   id: 2,
  //   image: IMG2,
  //   name: "frontend",
  //   title: "Tools : Javascript , React , AOS , Swiper , CSS , HTML ",
    // disable: '',
  //   
  // github: "https://github.com/Alirezas7ss/PORTFOLIO",
  //   demo: "https://www.alirezasoltanian.ir",
  // },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title:
  //     "Tools : Solidity , React , Javascript , Etherjs , Truffle , Tailwind , Css , Html",
    // disable: '',
  //   
  // github: "https://github.com/Alirezas7ss/ProjectNftWith-Dapp",
  //   demo: "https://silly-panda-815189.netlify.app/",
  // },
  //2
  {
    id: 4,
    image: IMG4,
    title: "Tool : figma",
    disable: '',
    
    github:
      "https://www.figma.com/file/jQ8ZwlFSv5qumlriZQhXL8/ProjectFigma?node-id=0%3A1",
    demo: "https://www.figma.com/file/jQ8ZwlFSv5qumlriZQhXL8/ProjectFigma?node-id=0%3A1",
  },
  //3
  {
    id: 5,
    image: IMG5,
    name: "frontend",
    title: "Tools : Bootstrap , Html , Css  ",
    disable: '',
    
    github: "https://github.com/Alirezas7ss/bootstrap-project",
    demo: "https://bootstrap-project-eta.vercel.app/",
  },
  //4
  {
    id: 6,
    image: IMG6,
    name: "frontend",
    title: "Tools : React , MaterialUI , GraphQL , HyGraph , ReactRouterDom ",
    disable: '',
    
    github: "https://github.com/Alirezas7ss/Blogram",
    demo: "https://blogram.vercel.app/",
  },
  //5
  {
    id: 7,
    image: IMG7,
    name: "solidity",
    title:
      "Tools : Nextjs , MaterialUI , Tailwind , Solidity , Moralis , ethers ",
    disable: '',
    
      github: "https://github.com/Alirezas7ss",
    demo: "https://market-dapp.vercel.app/",
  },
  //6
  {
    id: 8,
    image: IMG8,
    name: "solidity",
    title:
      "Tools : Nextjs , MaterialUI , Tailwind , Solidity , Moralis , ethers  ",
    disable: '',
    
      github: "https://github.com/Alirezas7ss",
    demo: "https://stickygum.vercel.app/",
  },
  //7
  {
    id: 9,
    image: IMG9,
    name: "solidity",
    title:
      "Tools : Nextjs , MaterialUI , Tailwind , 0x Protocol , Alchemy SDK , Solidity , ethers   ",
    disable: '',
    
      github: "https://github.com/Alirezas7ss",
    demo: "https://swap-stickygum.vercel.app/",
  },
  //8
  {
    id: 10,
    image: IMG10,
    name: "frontend",
    title: "Tools : Nextjs , Typescript , Tailwind    ",
    disable: '',
    
    github: "https://github.com/Alirezas7ss/Netflix",
    demo: "https://netflix-chi-five.vercel.app/",
  },
];
const figma = [random[3]];

const frontend = [random[0], random[1], random[3], random[4], random[9]];

const solidity = [random[6], random[7], random[8]];
const Portfolio = ({ portfolioRef }) => {
  const [popular, setPopular] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);
  const [activeGenre, setActiveGenre] = React.useState(random);
  useEffect(() => {
    if (activeGenre === random) {
      setFiltered(random);
      return;
    }

    setFiltered(activeGenre);
  }, [activeGenre]);

  return (
    <section ref={portfolioRef} id='portfolio' className='portfolio'>
      <h5>پروژه های من</h5>
      <h2>نمونه کارها</h2>
      <div className='button-choose'>
        <button
          style={{ borderRadius: "10px 0px 0px 10px" }}
          className={activeGenre === random ? "btn btn-primary" : "btn"}
          onClick={() => setActiveGenre(random)}
        >
          همه
        </button>
        <button
          style={{ borderRadius: "0px 0px 0px 0px" }}
          className={activeGenre === frontend ? "btn btn-primary" : "btn"}
          onClick={() => setActiveGenre(frontend)}
        >
          فرانت اند
        </button>
        <button
          style={{ borderRadius: "0px 0px 0px 0px" }}
          className={activeGenre === solidity ? "btn btn-primary" : "btn"}
          onClick={() => setActiveGenre(solidity)}
        >
          سالیدیتی
        </button>
        <button
          style={{ borderRadius: "0px 10px 10px 0px" }}
          className={activeGenre === figma ? "btn btn-primary" : "btn"}
          onClick={() => setActiveGenre(figma)}
        >
          UI/UX
        </button>
      </div>
      <div
        data-aos='zoom-in'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='900'
        className='container portfolio__container'
      >
        <AnimatePresence mode='wait'>
          {filtered.map(({ id, image, title, github, demo }, i) => {
            console.log(i);
            console.log(id);
            return (
              <motion.artifact
                variants={{
                  hidden: (i) => ({
                    opacity: 0,
                    // scale: 0.5 * i,
                    scale: 0.5,
                  }),
                  visible: (i) => ({
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: i * 0.1,
                    },
                  }),
                  removed: {
                    opacity: 0,
                    scale: 0,
                  },
                }}
                initial='hidden'
                animate='visible'
                exit='removed'
                custom={i}
                key={id}
                style={{
                  backgroundImage: `linear-gradient(rgba(229,229,229,0.7) 0%, rgba(150,150,150 , 0.93) 100%) , url(${image})`,
                }}
                className='portfolio__item'
              >
                <div className='portfolio__cover'>
                  <div className='portfolio__item-image'>
                    <img src={image} alt='' />
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a
                      href={github}
                      rel='noreferrer'
                      className='btn'
                      target='_blank'
                    >
                      سورس کد
                    </a>
                    <a
                      href={demo}
                      rel='noreferrer'
                      target='_blank'
                      className='btn btn-primary'
                    >
                      مشاهده آنلاین
                    </a>
                  </div>
                </div>
              </motion.artifact>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
