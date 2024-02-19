import React from 'react'
import './footer.css'
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">PORTFOLIO</a>
      <ul className='permalinks'>
        <li><a href="#">HOME</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook"><BsFacebook /></a>
        <a href="https://instagram.com"><AiFillInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; PORTFOLIO . All right reserved. </small>
      </div>
    </footer>
  )
}

export default Footer