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
let scrollThreshold = [0, 50];

const items = [
  {
    id: 1,
    zIndex: 0,
    tagIcon: <IoIosHome style={{ position: "relative", zIndex: 10 }} />,
    Tagactive: "first",
  },
  {
    id: 2,
    tagIcon: <AiOutlineUser style={{ position: "relative", zIndex: 10 }} />,
    Tagactive: "about",
  },
  {
    id: 3,
    tagIcon: <IoMdContacts style={{ position: "relative", zIndex: 10 }} />,
    Tagactive: "experience",
  },
  {
    id: 4,
    tagIcon: <FaBook style={{ position: "relative", zIndex: 10 }} />,
    Tagactive: "portfolio",
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
    "rgba(0, 0, 0, 0.362)",
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
    console.log(id);
    document.querySelector(`#${id}`).scrollIntoView({
      behavior: `smooth`,
    });
  };

  return (
    <>
      <motion.nav
        style={{ background }}
        layout
        transition={{
          layout: { duration: 10 },
        }}
      >
        {items.map((item) => (
          <motion.a
            layoutId={item.Tagactive}
            key={item.id}
            variants={parent}
            href={item.Tagactive}
            // onClick={() => setActiveNav(item.Tagactive)}
            onClick={(e) => handleClick(e, item.Tagactive)}
            transition={{
              layout: {
                duration: 0.2,
                ease: "anticipate",
              },
            }}
            style={{
              position: "relative",
              color: active === item.Tagactive ? "var(--color-bg)" : "",
            }}
          >
            {item.tagIcon}

            {active === item.Tagactive ? (
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
        ))}
        <Link href={pathname.includes("fa") ? "/" : "/fa"}>
          <MdLanguage />
        </Link>
      </motion.nav>
    </>
  );
};

export default Nav;
