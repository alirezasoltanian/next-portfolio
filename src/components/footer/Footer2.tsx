import React from "react";
import "./footer2.css";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        PORTFOLIO
      </a>
      <ul className="permalinks">
        <li>
          <a href="#portfolio">نمونه کار</a>
        </li>
        <li>
          <a href="#experience">مهارت ها</a>
        </li>
        {/* <li><a href="#services">services</a></li> */}
        <li>
          <a href="#about">درباره من</a>
        </li>
        {/* <li><a href="#testimonials">testimonials</a></li> */}
        <li>
          <a href="#">خانه</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://instagram.com/alireza.soltanian">
          <InstagramIcon />
        </a>
        <a href="https://github.com/alirezasoltanian">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/alirezasoltanian/">
          <LinkedInIcon />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; PORTFOLIO . All right reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
