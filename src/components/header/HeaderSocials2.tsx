import React from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const HeaderSocials = () => {
  return (
    <div
      data-aos-duration="900"
      data-aos="zoom-in-left"
      className="header__socials"
    >
      <a href="https://www.linkedin.com/in/alirezasoltanian/" target="_blank">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/alirezasoltanian" target="_blank">
        <GitHubIcon />
      </a>
    </div>
  );
};

export default HeaderSocials;
