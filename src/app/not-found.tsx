"use client";
import Image from "next/image";
import React from "react";

function NotFound() {
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div className='bg-slate-500 w-80 md:w-[450px] aspect-video relative'>
        <h2 className='absolute top-4 left-5 z-10'>404</h2>
        <img
          alt='404'
          //   width={720}
          //   height={720}
          className='absolute inset-0 w-full h-full bg-cover z-0'
          src='/confused-travolta.2cb7b484.gif'
          //   unoptimized={true}
        />
      </div>
    </div>
  );
}

export default NotFound;
