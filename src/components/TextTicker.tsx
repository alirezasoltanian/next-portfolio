// @ts-nocheck
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function TextTicker({ value, direction = "up" }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(() => {
    const onChange = (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    };

    springValue.on("change", onChange);

    // return () => {
    //   springValue.off("change", onChange);
    // };
  }, [springValue]);

  return <span ref={ref} />;
}
