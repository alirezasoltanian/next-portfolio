import { useInView } from "framer-motion";
import { useRef } from "react";

const useViewRef = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return [ref, inView];
};

export default useViewRef;
