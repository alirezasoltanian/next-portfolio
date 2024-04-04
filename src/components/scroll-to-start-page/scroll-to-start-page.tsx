import React from "react";
import './scroll-to-start-page.css'
function ScrollTOStartPage() {
  return (
      <div className="body-cta">
        <a href='#head' id='cta' className="w-20 h-20 bg-red-500">
          <span className='sr-only '>Scroll</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='m4.5 15.75 7.5-7.5 7.5 7.5'
            />
          </svg>
        </a>
      </div>
  );
}

export default ScrollTOStartPage;
