import { useRef } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { cn } from "@/lib/utils";

function Layers1({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="760"
      height="760"
      viewBox="0 0 760 760"
      fill="none"
      className={cn("h-[77.6px] w-[77.6px]", className)}
    >
      <path d="M374.519 0H385.481V69.4231H374.519V0Z" fill="white" />
      <path d="M374.519 690.577H385.481V760H374.519V690.577Z" fill="white" />
      <path
        d="M308.616 6.72492L319.411 4.82146L331.466 73.1898L320.671 75.0933L308.616 6.72492Z"
        fill="white"
      />
      <path
        d="M428.534 686.81L439.329 684.907L451.384 753.275L440.589 755.179L428.534 686.81Z"
        fill="white"
      />
      <path
        d="M244.882 24.7913L255.183 21.0422L278.927 86.2785L268.626 90.0276L244.882 24.7913Z"
        fill="white"
      />
      <path
        d="M481.073 673.721L491.374 669.972L515.118 735.208L504.817 738.958L481.073 673.721Z"
        fill="white"
      />
      <path
        d="M244.882 735.209L255.183 738.958L278.927 673.722L268.626 669.973L244.882 735.209Z"
        fill="white"
      />
      <path
        d="M481.073 86.2788L491.374 90.0279L515.118 24.7915L504.818 21.0424L481.073 86.2788Z"
        fill="white"
      />
      <path
        d="M308.616 753.275L319.411 755.178L331.466 686.81L320.671 684.907L308.616 753.275Z"
        fill="white"
      />
      <path
        d="M428.534 73.1895L439.329 75.0929L451.384 6.72456L440.589 4.82111L428.534 73.1895Z"
        fill="white"
      />
      <path
        d="M185.254 53.6509L194.747 48.1701L229.458 108.292L219.965 113.773L185.254 53.6509Z"
        fill="white"
      />
      <path
        d="M530.543 651.708L540.036 646.227L574.747 706.35L565.254 711.83L530.543 651.708Z"
        fill="white"
      />
      <path
        d="M185.254 706.349L194.747 711.83L229.458 651.708L219.965 646.227L185.254 706.349Z"
        fill="white"
      />
      <path
        d="M530.542 108.292L540.035 113.773L574.747 53.6507L565.254 48.1699L530.542 108.292Z"
        fill="white"
      />
      <path
        d="M131.542 92.4261L139.939 85.3801L184.564 138.561L176.167 145.607L131.542 92.4261Z"
        fill="white"
      />
      <path
        d="M575.437 621.439L583.834 614.393L628.458 667.574L620.061 674.62L575.437 621.439Z"
        fill="white"
      />
      <path
        d="M131.542 667.574L139.939 674.62L184.564 621.439L176.167 614.393L131.542 667.574Z"
        fill="white"
      />
      <path
        d="M575.437 138.561L583.834 145.607L628.458 92.4261L620.061 85.3801L575.437 138.561Z"
        fill="white"
      />
      <path
        d="M85.3803 139.939L92.4263 131.542L145.607 176.166L138.561 184.564L85.3803 139.939Z"
        fill="white"
      />
      <path
        d="M614.393 583.834L621.439 575.437L674.62 620.061L667.574 628.458L614.393 583.834Z"
        fill="white"
      />
      <path
        d="M85.3804 620.061L92.4263 628.458L145.607 583.833L138.562 575.436L85.3804 620.061Z"
        fill="white"
      />
      <path
        d="M614.393 176.166L621.439 184.563L674.62 139.939L667.574 131.542L614.393 176.166Z"
        fill="white"
      />
      <path
        d="M48.17 194.746L53.6508 185.253L113.773 219.965L108.292 229.458L48.17 194.746Z"
        fill="white"
      />
      <path
        d="M646.227 540.035L651.708 530.542L711.83 565.254L706.35 574.747L646.227 540.035Z"
        fill="white"
      />
      <path
        d="M48.17 565.254L53.6508 574.747L113.773 540.035L108.292 530.542L48.17 565.254Z"
        fill="white"
      />
      <path
        d="M646.227 219.965L651.708 229.458L711.83 194.746L706.349 185.253L646.227 219.965Z"
        fill="white"
      />
      <path
        d="M21.0426 255.183L24.7916 244.882L90.028 268.626L86.2789 278.927L21.0426 255.183Z"
        fill="white"
      />
      <path
        d="M669.973 491.374L673.722 481.073L738.958 504.817L735.209 515.118L669.973 491.374Z"
        fill="white"
      />
      <path
        d="M21.0426 504.818L24.7916 515.118L90.028 491.374L86.2789 481.073L21.0426 504.818Z"
        fill="white"
      />
      <path
        d="M669.972 268.626L673.721 278.927L738.958 255.183L735.209 244.882L669.972 268.626Z"
        fill="white"
      />
      <path
        d="M4.82148 319.411L6.72493 308.616L75.0933 320.671L73.1899 331.466L4.82148 319.411Z"
        fill="white"
      />
      <path
        d="M684.907 439.329L686.811 428.534L755.179 440.589L753.275 451.384L684.907 439.329Z"
        fill="white"
      />
      <path
        d="M4.82141 440.589L6.72487 451.384L75.0933 439.329L73.1898 428.534L4.82141 440.589Z"
        fill="white"
      />
      <path
        d="M684.907 320.671L686.81 331.466L755.179 319.411L753.275 308.616L684.907 320.671Z"
        fill="white"
      />
      <path d="M0 385.481V374.519H69.4231V385.481H0Z" fill="white" />
      <path d="M690.577 385.481V374.519H760V385.481H690.577Z" fill="white" />
    </svg>
  );
}

function Layers2({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-[55px] w-[55px] rounded-full bg-black", className)}
    >
      
    </div>
  );
}

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const ROTATION_RANGE = 12.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export const VisionOSIcon = () => {
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const div = ref.current;
    const rect = div.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rotatationY = mouseX / width - HALF_ROTATION_RANGE;
    const rotationX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    rotateX.set(rotationX);
    rotateY.set(rotatationY);
  };

  const handleMouseLeave = () => {
    animate(rotateX, 0, {
      duration: 0.3,
    });
    animate(rotateY, 0, {
      duration: 0.3,
    });
  };

  const handleMouseEnter = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      className="group absolute ml-1/2  flex h-[500px] w-[300px]  items-center justify-center"
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className=" relative flex h-[102.4px] w-[102.4px] items-center justify-center rounded-full bg-gradient-to-t from-[#1F6EEF] from-0% to-[#1DD8F9] to-100%"
        ref={ref}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformOrigin: "center",
        }}
      >
        <div
          className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-300 group-hover:[transform:translateZ(10px)]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Layers1 className="drop-shadow-[2px_0px_2px_rgba(0,0,0,0.4)] transition-[filter] duration-300 group-hover:drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
        </div>
        <div
          className="absolute inset-0 z-20 flex items-center justify-center transition-transform group-hover:[transform:translateZ(20px)]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Layers2 className="drop-shadow-[2px_0px_2px_rgba(0,0,0,0.4)] transition-[filter] duration-300  group-hover:drop-shadow-[3px_5px_2px_rgba(0,0,0,0.4)]" />
        </div>
      </motion.div>
    </div>
  );
};
