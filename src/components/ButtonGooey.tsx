"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMounted } from "../hooks/use-mount";
export const ButtonGooey = () => {
  // const variants = {
  //   open: { opacity: 1, x: 0 , rotate: '360deg' },
  //   closed: { opacity: 0, x: "-100%" , rotate: '00deg' },
  // };
  const mounted = useMounted();
  const variants = {
    open: { rotate: "360deg" },
    closed: { rotate: "0deg", transition: { ease: "easeOut", duration: 0.5 } },
  };
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className='wrapper relative'>
        <p className='absolute -top-2 left-0 right-0 m-auto text-[8px] text-black'>
          Skill issue
        </p>
        {mounted ? (
          <button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className='button'
          >
            ( •_•)&gt;⌐■-■
            <div className=' bubble'>
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants}
              >
                <span>(</span>
                <span className=' text-black'>⌐■</span>
                <span>_</span>
                <span className=' text-black'>■</span>
                <span>)</span>
              </motion.div>
            </div>
          </button>
        ) : (
          <button className='w-32 h-16  rounded-xl mt-3'></button>
        )}
      </div>

      <svg
        className='absolute hidden'
        width='0'
        height='0'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
      >
        <defs>
          <filter id='gooey'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur-sm'
            />
            <feColorMatrix
              in='blur-sm'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10'
              result='gooey'
            />
            <feComposite in='SourceGraphic' in2='gooey' operator='atop' />
          </filter>
        </defs>
      </svg>

      <style jsx>{`
        .wrapper {
          filter: url("#gooey");
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .button {
          background: #1c305d;
          color: #eee;
          display: inline-flex;
          font-weight: bold;
          padding: 0 24px 0 24px;
          border-radius: 12px;
          font-size: 1.25rem;
          line-height: 1.25rem;
          height: 64px;
          align-items: center;
        }

        .bubble {
          color: #fff;
          z-index: -10;
          display: flex;
          background: #1c305d;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          position: absolute;
          content: "";
          border-radius: 12px;
          transition: transform 0.8s;
          transition-timing-function: bezier(0.2, 0.8, 0.2, 1.2);
          transform: translateX(80%) translateY(0%);
        }

        .button:hover .bubble {
          transform: translateX(235%) translateY(0%);
        }
      `}</style>
    </>
  );
};
