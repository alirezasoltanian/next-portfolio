// @ts-nocheck

"use client";
import React, { useRef } from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import ME from "../../assets/me-about2.webp";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import styles from "./bubble.module.css";
import { useTransform, useMotionValue, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import { Marquee } from "../ui/Marquee";
import ImageB from "@/components/ImageB";
import { ButtonGooey } from "../ButtonGooey";
const About = ({ aboutRef }) => {
  // justMove
  const baseVelocity = -100;
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(1, -70, v)}%`);
  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (20 / -70000);
    baseX.set(baseX.get() + moveBy);
  });
  // justMove

  return (
    <section ref={aboutRef} className="sectionAbout">
      {/* <motion.div style={{ x, width: 3000 }}> */}
      <Marquee fade={true}>
        {Array.from({ length: 5 }).map((_, index) => (
          <h2
            key={index}
            className="text-center text-5xl font-thin text-indigo-300"
          >
            {"GET TO KNOW".split("").map((child, idx) => (
              <span className={styles.hoverText} key={idx}>
                {child}
              </span>
            ))}
          </h2>
        ))}
      </Marquee>
      {/* </motion.div> */}
      <h2 id="about">About me</h2>

      <div className="container about__container1">
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="800"
          className="about__me1"
        >
          <div className="about__me-image1">
            <ImageB src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content1">
          <div className="about__cards1">
            <artifact
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="about__card1"
            >
              <FaAward className="about__icon1" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </artifact>

            <artifact
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              className="about__card1"
            >
              <FiUsers className="about__icon1" />
              <h5>Cooperation</h5>
              <small>2</small>
            </artifact>

            <artifact
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
              className="about__card1"
            >
              <VscFolderLibrary className="about__icon1" />
              <h5>Project</h5>
              <small>5+ Completed</small>
            </artifact>
          </div>
          <p>
            I&apos;m full stack developer you can see in the portfolio my
            experiences and projects also can see my github and linkedin to get
            to know me better if have question or Speech You can send me a
            message from the Contact ME. I will be happy to talk to you :)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
