import React from 'react' ;
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";


const HeaderSocials = () => {
  return (
    <div data-aos-duration="900" data-aos="zoom-in-left" className="header__socials">
      <a href="https://www.linkedin.com/in/alireza-soltanian76-nonstop/" target='_blank'><AiOutlineLinkedin /></a>
      <a href="https://github.com/Alirezas7ss" target='_blank'><AiFillGithub  /></a>
      <a href="https://dribbble.com/Soltanian76" target='_blank' rel="noreferrer" ><AiFillDribbbleCircle  /></a>
    </div>
  )
}

export default HeaderSocials