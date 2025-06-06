"use client";

import { useEffect } from "react";
import { motion, MotionValue, useSpring, useTransform } from "framer-motion";

const fontSize = 15;
const padding = 15;
const height = fontSize + padding;

export function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums">
      {[...Array(10).keys()].map((_, i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

export function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.div
      style={{ y }}

      // className='absolute inset-0 flex items-center justify-center'
    >
      {number}
    </motion.div>
  );
}

export function DigitC({ value }: { value: number | undefined | null }) {
  const height = fontSize + padding;

  let number = value ?? 0;
  let numberAsString = number.toString();
  let lengthOfNumber = numberAsString.length;

  return (
    <div
      style={{ fontSize }}
      dir="ltr"
      className="py-1 overflow-hidden   px-2 flex items-center text-center  space-x-1    leading-none "
    >
      {Array.from({ length: lengthOfNumber }).map((_, index) => (
        <Digit
          key={index}
          place={Math.pow(10, lengthOfNumber - index - 1)}
          value={number}
        />
      ))}
    </div>
  );
}
