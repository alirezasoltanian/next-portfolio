"use client";
import { DigitC } from "@/components/Digit";
import { CornerLeftUp } from "lucide-react";
import React, { useEffect, useState } from "react";
// import shortStar from "/voice-effect/short-star.m4a";
function StareRate() {
  const [numberOfStar, setNumberOfStar] = useState<number>(2);
  const [valueFill, setValueFill] = useState(32);
  useEffect(() => {
    switch (numberOfStar) {
      case 0:
        setValueFill(32);
        break;
      case 1:
        setValueFill(20);

        break;
      case 2:
        setValueFill(16);
        break;
      case 3:
        setValueFill(10);

        break;
      case 4:
        setValueFill(6);
      case 5:
        setNumberOfStar(0);

        break;
    }
  }, []);

  const clickHandler = () => {
    setNumberOfStar(numberOfStar + 1);
    console.log(numberOfStar);
    console.log(valueFill);
    switch (numberOfStar) {
      case 0:
        setNumberOfStar(1);
        setValueFill(20);
        new Audio("/voice-effect/sound-effect-star.mp3").play();
        break;
      case 1:
        setNumberOfStar(2);
        setValueFill(16);

        new Audio("/voice-effect/sound-effect-star.mp3").play();
        setTimeout(() => {
          new Audio("/voice-effect/sound-effect-star.mp3").play();
        }, 100);

        break;
      case 2:
        setNumberOfStar(3);
        setValueFill(10);
        new Audio("/voice-effect/sound-effect-star.mp3").play();
        setTimeout(() => {
          new Audio("/voice-effect/sound-effect-star.mp3").play();
        }, 200);

        setTimeout(() => {
          new Audio("/voice-effect/sound-effect-star.mp3").play();
        }, 100);

        break;
      case 3:
        setNumberOfStar(4);
        setValueFill(6);
        setValueFill(10);
        new Audio("/voice-effect/sound-effect-star.mp3").play();
        setTimeout(() => {
          new Audio("/voice-effect/sound-effect-star.mp3").play();
        }, 200);

        setTimeout(() => {
          new Audio("/voice-effect/sound-effect-star.mp3").play();
        }, 100);
        break;
      case 4:
        setNumberOfStar(5);
        setValueFill(0);
        new Audio("/voice-effect/sound-effect-star.mp3").play();
        new Audio("/voice-effect/sound-effect-star.mp3").play();
        new Audio("/voice-effect/sound-effect-star.mp3").play();
        new Audio("/voice-effect/shooting-star-2.mp3").play();

        break;
    }
  };
  return (
    <div className="mt-4 flex justify-between">
      <div className="flex gap-2 ">
        <div
          style={{
            transform: `rotate(${
              numberOfStar > 4 ? 360 : numberOfStar * 10
            }deg)`,
          }}
          className={` transition-all duration-1000 hover:animate-hover-tada  `}
        >
          <button style={{ rotate: "60%" }} onClick={clickHandler}>
            <svg
              width="32"
              height="32"
              fill="none"
              aria-hidden="true"
              className="star duration-1000 [--amount:2px] [--time:200ms]"
            >
              <mask
                id="prefix__a"
                //   style='mask-type:alpha'
                maskUnits="userSpaceOnUse"
                x="1"
                y="0"
                width="30"
                height="29"
              >
                <path
                  d="M20.237 9.176l-2.29-5.68-.009-.024c-.223-.555-.404-1.004-.572-1.332-.161-.318-.362-.635-.68-.799a1.5 1.5 0 00-1.372 0c-.318.164-.519.482-.68.799-.168.328-.348.777-.572 1.332l-.01.024-2.289 5.68c-.15.37-.185.442-.228.49a.5.5 0 01-.18.13c-.058.026-.137.038-.536.066l-6.11.421-.025.002c-.597.041-1.08.075-1.444.132-.351.056-.715.149-.97.4a1.5 1.5 0 00-.423 1.306c.057.353.297.642.549.894.26.26.631.57 1.09.955l.02.016L8.2 17.921c.307.256.364.313.397.368a.5.5 0 01.068.21c.006.065-.007.144-.104.532l-1.487 5.94-.006.025c-.145.58-.263 1.05-.32 1.414-.056.352-.08.726.08 1.046a1.5 1.5 0 001.111.806c.353.055.703-.084 1.02-.246.328-.167.738-.424 1.245-.741l.022-.014 5.19-3.25c.34-.212.41-.248.473-.263a.5.5 0 01.222 0c.063.015.134.051.473.263l5.19 3.25.022.014c.507.317.917.574 1.245.741.317.162.667.3 1.02.246a1.5 1.5 0 001.11-.806c.161-.32.137-.694.081-1.046-.057-.364-.175-.833-.32-1.414l-.006-.025-1.487-5.94c-.097-.388-.11-.467-.104-.531a.5.5 0 01.068-.211c.033-.056.09-.112.397-.369l4.694-3.932.02-.016c.459-.384.83-.695 1.09-.955.252-.252.492-.541.55-.894a1.5 1.5 0 00-.425-1.305c-.254-.252-.618-.345-.97-.4-.364-.058-.846-.091-1.443-.133l-.026-.002-6.109-.421c-.399-.028-.478-.04-.537-.065a.5.5 0 01-.18-.13c-.042-.05-.078-.12-.227-.491z"
                  fill="#D9D9D9"
                  stroke="#f2da66"
                  strokeLinejoin="round"
                ></path>
              </mask>
              <g mask="url(#prefix__a)">
                <path
                  fill="#f2da66"
                  transform={`translate(0,${valueFill})`}
                  className="animate-[transition:500ms_cubic-bezier(0.68,-0.55,0.265,1.55)]"
                  d="M0-.339c17.5 5.5 18-3 32 0v32H0v-32z"
                ></path>
                <path
                  d="M21.534 8.383L19.34 2.935l-.028-.07c-.207-.514-.41-1.017-.608-1.406-.174-.342-.555-1.052-1.33-1.451a3 3 0 00-2.745 0c-.776.399-1.157 1.11-1.331 1.451-.198.39-.4.892-.608 1.406l-.028.07-2.195 5.448-5.86.404-.075.005c-.553.038-1.094.076-1.525.144-.379.06-1.173.203-1.792.817a3 3 0 00-.848 2.61c.14.861.698 1.443.97 1.715.308.308.724.656 1.15 1.012l.057.048 4.502 3.772-1.426 5.697-.018.073c-.135.538-.266 1.064-.335 1.495-.06.379-.17 1.178.224 1.956a3 3 0 002.22 1.614c.862.133 1.588-.218 1.93-.392.389-.199.848-.486 1.318-.78l.064-.04L16 25.415l4.978 3.116.064.04c.47.295.93.582 1.318.78.342.175 1.068.526 1.93.393a3 3 0 002.22-1.614c.393-.778.284-1.577.224-1.956-.069-.431-.2-.957-.335-1.495l-.018-.073-1.426-5.697 4.502-3.772.058-.048c.425-.356.84-.704 1.15-1.012.271-.272.829-.854.969-1.715a3 3 0 00-.848-2.61c-.62-.614-1.413-.757-1.792-.817-.431-.068-.972-.106-1.525-.144l-.075-.005-5.86-.404z"
                  stroke="#f2da66"
                  strokeWidth="5"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            {/*  */}
          </button>
        </div>
        <DigitC value={numberOfStar} />
      </div>
      <a href="#">
        <CornerLeftUp />
      </a>
    </div>
  );
}

export default StareRate;
