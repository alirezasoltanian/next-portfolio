// @ts-nocheck

"use client";

import React from "react";
import "./nav.css";
import { IoIosHome } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { useState, useRef, useEffect } from "react";

//framer-motion
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
let scrollThreshold = [0, 50];

const items = [
  {
    id: 1,
    zIndex: 0,
    tagIcon: <IoIosHome style={{ position: "relative", zIndex: 10 }} />,
    TagActive: "first",
    label: "Home",
  },
  {
    id: 2,
    tagIcon: <AiOutlineUser style={{ position: "relative", zIndex: 10 }} />,
    TagActive: "about",
    label: "About",
  },
  {
    id: 3,
    tagIcon: <IoMdContacts style={{ position: "relative", zIndex: 10 }} />,
    TagActive: "experience",
    label: "Experience",
  },
  {
    id: 4,
    tagIcon: <FaBook style={{ position: "relative", zIndex: 10 }} />,
    TagActive: "portfolio",
    label: "Portfolio",
  },
];

const parent = {
  hidden: { background: "transparent" },
  visible: {
    // opacity: [0,1],
    background: "var(--color-primary)",
    color: "var(--color-bg)",
    transition: {
      boxShadow: {
        delay: 5,
        duration: 1,
        ease: "anticipate",
      },
    },
    boxShadow: [
      "0px 0px 0px rgb(22,225,215)",
      "0px 0px 22px var(--color-primary)",
      "0px 0px 0px rgb(255,255,255)",
    ],
    // scale: [1,0,2]
  },
};
const Nav = ({ active }) => {
  let { scrollY } = useViewportScroll();
  const pathname = usePathname();
  let scrollYOnDirectionChange = useRef(scrollY.get());
  let lastPixelsScrolled = useRef();
  let lastScrollDirection = useRef();
  let pixelsScrolled = useMotionValue(0);
  let background = useTransform(pixelsScrolled, scrollThreshold, [
    "rgba(2, 93, 139, 0.562)",
    "rgba(0, 0, 0, 0.162)",
  ]);
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return;

      let isScrollingDown = scrollY.getPrevious() - latest < 0;
      let scrollDirection = isScrollingDown ? "down" : "up";
      let currentPixelsScrolled = pixelsScrolled.get();
      let newPixelsScrolled;

      if (lastScrollDirection.current !== scrollDirection) {
        lastPixelsScrolled.current = currentPixelsScrolled;
        scrollYOnDirectionChange.current = latest;
      }

      if (isScrollingDown) {
        newPixelsScrolled = Math.min(
          lastPixelsScrolled.current +
            (latest - scrollYOnDirectionChange.current),
          scrollThreshold[1]
        );
      } else {
        newPixelsScrolled = Math.max(
          lastPixelsScrolled.current -
            (scrollYOnDirectionChange.current - latest),
          scrollThreshold[0]
        );
      }

      pixelsScrolled.set(newPixelsScrolled);
      lastScrollDirection.current = scrollDirection;
    });
  }, [pixelsScrolled, scrollY]);
  const handleClick = (e, id) => {
    e.preventDefault();
    document.querySelector(`#${id}`).scrollIntoView({
      behavior: `smooth`,
    });
  };

  return (
    <div>
      <motion.nav
        style={{ background }}
        layout
        transition={{
          layout: { duration: 10 },
        }}
        className='z-40'
      >
        <div className='absolute inset-0 rounded-full'>
          <div className='pointer-events-none absolute bottom-0 left-0 z-10 size-full overflow-hidden rounded-full border border-[#f5f5f51a]'>
            <div className='glass-effect h-full w-full' />
          </div>
          <svg>
            <defs>
              <filter id='fractal-noise-glass'>
                <feTurbulence
                  type='fractalNoise'
                  baseFrequency='0.12 0.12'
                  numOctaves='1'
                  result='warp'
                ></feTurbulence>
                <feDisplacementMap
                  xChannelSelector='R'
                  yChannelSelector='G'
                  scale='30'
                  in='SourceGraphic'
                  in2='warp'
                />
              </filter>
            </defs>
          </svg>
        </div>
        {items.map((item) => (
          <Tooltip key={item.TagActive} delayDuration={500}>
            <TooltipTrigger asChild>
              <motion.a
                layoutId={item.TagActive}
                key={item.id}
                variants={parent}
                href={item.TagActive}
                // onClick={() => setActiveNav(item.TagActive)}
                onClick={(e) => handleClick(e, item.TagActive)}
                transition={{
                  layout: {
                    duration: 0.2,
                    ease: "anticipate",
                  },
                }}
                style={{
                  position: "relative",
                  color: active === item.TagActive ? "var(--color-bg)" : "",
                }}
              >
                {item.tagIcon}

                {active === item.TagActive ? (
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0px 0px 0px rgb(22,225,215)",
                        "0px 0px 5px var(--color-primary)",
                        "0px 0px 10px var(--color-primary)",
                        "0px 0px 15px var(--color-primary)",
                        "0px 0px 20px var(--color-primary)",
                        "0px 0px 30px var(--color-primary)",
                        "0px 0px 20px var(--color-primary)",
                        "0px 0px 15px var(--color-primary)",
                        "0px 0px 10px var(--color-primary)",
                        "0px 0px 5px var(--color-primary)",
                        "0px 0px 0px rgb(255,255,255)",
                      ],
                    }}
                    layoutId='background'
                    transition={{
                      layout: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                      boxShadow: {
                        delay: 0.5,
                        duration: 0.5,
                        ease: "circInOut",
                      },
                    }}
                    style={{
                      background: "var(--color-primary)",
                      position: "absolute",
                      bottom: "0px",
                      right: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "50px",
                      zIndex: 5,
                    }}
                  />
                ) : null}
              </motion.a>
            </TooltipTrigger>
            <TooltipContent className=' border-2 text-brand-foreground border-brand-foreground font-semibold  bg-slate-900/70'>
              {item.label}
            </TooltipContent>
          </Tooltip>
        ))}
        <div className='bg-light-custom-y-gradient w-[3px] rounded-full my-[1px] -mx-1 relative' />
        <Tooltip delayDuration={500}>
          <TooltipTrigger asChild>
            <Link
              href={pathname.includes("fa") ? "/" : "/fa"}
              className='relative'
            >
              <MdLanguage />
            </Link>
          </TooltipTrigger>
          <TooltipContent className='border-2 text-brand-foreground border-brand-foreground font-semibold  bg-slate-900/70'>
            Language
          </TooltipContent>
        </Tooltip>
      </motion.nav>
    </div>
  );
};

export default Nav;
