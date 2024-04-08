import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
interface Work {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: string;
}
function ExperienceCard({ work }: { work: Work }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    console.log(clientX, clientY);

    mouseX.set(clientX ? clientX - left : left);
    mouseY.set(clientY ? clientY - top : top);
  }
  return (
    <div
      className='group relative max-w-md rounded-xl border border-white/60 bg-gray-900/90 p-1 shadow-2xl'
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-xl  transition duration-300 group-hover:opacity-100'
        style={{
          background: useMotionTemplate`
        radial-gradient(
          450px circle at ${mouseX}px ${mouseY}px,
          rgba(14, 165, 233, 0.8),
          transparent 80%
        )
      `,
        }}
      />
      {/* <div>
        <h3 className='text-base font-semibold leading-7 text-sky-500'>
          {item.title}
        </h3>
        <div className='mt-2 flex items-center gap-x-2'>
          <span className='text-5xl font-bold tracking-tight text-white'>
            Hero
          </span>
        </div>
        <p className='mt-6 text-base leading-7 text-gray-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis illum
          eum ullam nostrum atque quam.
        </p>
      </div> */}
      <Card className='relative bg-gray-900 text-white'>
        <motion.div
          className='pointer-events-none absolute -inset-px rounded-xl  transition duration-300 group-hover:opacity-100'
          style={{
            background: useMotionTemplate`
        radial-gradient(
          550px circle at ${mouseX}px ${mouseY}px,
          rgba(14, 165, 233, 0.2),
          transparent 80%
        )
      `,
          }}
        />
        <CardHeader>
          <div className='flex items-center justify-between gap-x-2 text-base '>
            <h3 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
              <a className='hover:underline' href={work.link}>
                {work.company}
              </a>
            </h3>
            <div className='text-sm tabular-nums text-gray-500'>
              {/* {work.start} - {work.end} */}
              {work.start}
            </div>
          </div>

          <h4 className='font-mono text-sm leading-none'>{work.title}</h4>
        </CardHeader>
        <CardContent className=' text-xs'>
          <div>{work.description}</div>
          <div className='inline-flex gap-x-1 mt-2'>
            {work.badges.map((badge) => (
              <Badge
                variant='secondary'
                className='align-middle text-xs'
                key={badge}
              >
                {badge}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ExperienceCard;
