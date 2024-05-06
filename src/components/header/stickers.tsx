"use client";
import React from "react";
import gsap from "gsap";
import "./stickers.css";
import { Bebas_Neue } from "next/font/google";
import ImageB from "../ImageB";
import { Shine } from "../Shine";

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<"granted" | "denied">;
}
const beba = Bebas_Neue({ weight: "400", subsets: ["latin"] });
function Stickers() {
  React.useEffect(() => {
    const UPDATE = ({ x, y }: { x: number; y: number }) => {
      gsap.set(document.documentElement, {
        "--x": gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
        "--y": gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
      });
    };
    window.addEventListener("mousemove", UPDATE);
    return () => {
      window.removeEventListener("mousemove", UPDATE);
    };
  }, []);

  React.useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      if (beta !== null && gamma !== null) {
        gsap.set(document.documentElement, {
          "--x": gsap.utils.clamp(
            -1,
            1,
            isLandscape
              ? gsap.utils.mapRange(-45, 45, -1, 1, beta)
              : gsap.utils.mapRange(-45, 45, -1, 1, gamma)
          ),
          "--y": gsap.utils.clamp(
            -1,
            1,
            isLandscape
              ? gsap.utils.mapRange(20, 70, 1, -1, Math.abs(gamma))
              : gsap.utils.mapRange(20, 70, 1, -1, beta)
          ),
        });
      }
    };
    const initiate = () => {
      const requestPermission = (
        DeviceOrientationEvent as unknown as DeviceOrientationEventiOS
      ).requestPermission;
      const iOS = typeof requestPermission === "function";
      if (iOS) {
        Promise.all([requestPermission()]).then((results) => {
          if (results.every((result: string) => result === "granted")) {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        });
      } else {
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };
    document.body.addEventListener("click", initiate, { once: true });
    return () => {
      document.body.removeEventListener("click", initiate);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);
  return (
    <div className='relative  h-fit '>
      <div
        className={`${beba.className}  z-20 absolute right-24 md:-right-16 top-0 text-brand m-0  uppercase second-two-level-move `}
      >
        <span className='flex text-white text-[2.5rem] md:text-[4rem]'>
          <span>(</span>
          <Shine puffyness='2'>
            <span className=' text-black'>⌐■</span>
          </Shine>
          <span>_</span>
          <Shine puffyness='2'>
            <span className=' text-black'>■</span>
          </Shine>
          <span>)</span>
        </span>
      </div>

      {/* <div className='z-20 size-16 md:size-32 absolute ml-32 md:ml-0 md:left-0 -top-8 md:top-1/2 text-brand m-0 text-[4rem] uppercase second-level-move'>
        <Shine puffyness='2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            x='0px'
            y='0px'
            viewBox='0 0 100 125'
          >
            <g>
              <g>
                <path d='M31.5,46.1c0,0-10.8-11-18.1-4.1c0,0-5.5,4.2-3.7,14.2c0,0,4.9-6.7,7.9-4.2s0.4,12.8,7.5,19.9c7.1,7.1,29,12.8,29,12.8    S61.5,88,65.6,91c7,5,20.5-4.2,24.7-8.5c0.5-0.5,0.2-1.3-0.5-1.4c-5-0.3-19.4-1.2-22.9-3.9C62.7,74.1,42,47.3,31.5,46.1z' />
                <path d='M35.3,60.9c0.3-0.3-0.6-10.8,6.1-13.4c2.6-1,6.7-12.1,16.9-15.3c12-3.8,22-14.9,24.7-23.8c0.3-1,1.8-1,2.1,0    c1.1,3.7,2,9.3-0.6,13.6l2.8-1c0.9-0.3,1.7,0.5,1.4,1.4c-1.1,3.7-3.6,11.4-5.6,13.8l5,0.1c0.9,0,1.4,0.9,0.9,1.7    c-2,3.3-6.7,10.6-11.5,11l4.2,1.3c0.8,0.3,1,1.3,0.4,1.9c-2.5,2.2-7.6,6.4-10.4,6.6l3.6,1.5c0.9,0.4,0.9,1.6,0,2    c-4,1.9-12.5,5.2-17.2,3.3c0,0-8.3,5.1-14.8,3.2S35.3,60.9,35.3,60.9z' />
                <path d='M37.3,49.8c0,0,2.5-3,4.1-3.1c0,0,8.5-14.4,14.7-15.6c6-1.1,7.8-4,7.8-4L61.3,27c0,0,7.1-5.6,6-5.6    c-0.9,0-2.6-0.2-2.6-0.2s1.9-4.5,1.5-7.8c-0.1-0.7-0.7-1-1.2-0.6c-3.1,3-12,11.1-20.6,12.4C40,26,34.1,48.7,34.1,48.7L37.3,49.8z' />
              </g>
            </g>
          </svg>
        </Shine>
      </div> */}
      <article className=' w-[600px] aspect-[2/1.1] max-h-[calc(100svh-2rem)] relative overflow-hidden max-w-[calc(100%-2rem)] portrait:min-h-[330px]'>
        <div className='assets absolute inset-0 rounded-[4em] overflow-hidden'>
          <ImageB
            width={420}
            height={420}
            className='z-10 absolute top-0 left-1/2 -translate-x-1/2 h-full w-[660px] max-w-[unset] object-cover select-none pointer-events-none saturate-[1.5] brightness-[0.9] first-level-move'
            src='/images/osaka-sky.jpeg'
            alt=''
          />

          {/* <img
              className='absolute top-0 left-1/2 -translate-x-1/2 h-full w-[460px] max-w-[unset] object-cover select-none third-level-move'
              src='../../assets/me31.png'
              alt=''
            /> */}
        </div>
      </article>
      <h4
        className={`${beba.className} z-20 absolute left-1/2 top-[60%] md:top-[50%] text-brand m-0 text-[3.5rem] md:text-[4rem] uppercase second-level-move `}
      >
        <Shine puffyness='2'>SOLOP</Shine>
      </h4>
    </div>
  );
}

export default Stickers;
