// @ts-nocheck

"use client";

import { useEffect, useState } from "react";
import About2 from "../about/About2";
import Footer2 from "../footer/Footer2";
import Header2 from "../header/Header2";
import Nav from "../nav/Nav";
import Portfolio2 from "../portfolio/Portfolio2";
import Experience2 from "../skills/Skills2";
import "./home2.css";

import Link from "next/link";
import useViewRef from "../../hooks/useViewRef";
// import Testimonials from '../testimonials/Testimonials'
export default function Home() {
  const [active, setActive] = useState("first");

  const [firstRef, isInFirstView] = useViewRef();
  const [aboutRef, isInAboutView] = useViewRef();
  const [experienceRef, isInExperienceView] = useViewRef();
  const [portfolioRef, isInPortfolioView] = useViewRef();

  useEffect(() => {
    const viewStates = {
      first: isInFirstView,
      about: isInAboutView,
      experience: isInExperienceView,
      portfolio: isInPortfolioView,
    };

    const activeView = Object.keys(viewStates).find((key) => viewStates[key]);
    setActive(activeView);
  }, [isInFirstView, isInAboutView, isInExperienceView, isInPortfolioView]);
  return (
    <div className="homeflow">
      <Link className="language2" href="/">
        English
      </Link>

      <Header2 firstRef={firstRef} />
      <Nav active={active} />
      <About2 aboutRef={aboutRef} />
      <Experience2 experienceRef={experienceRef} />
      {/* <Services /> */}
      <Portfolio2 portfolioRef={portfolioRef} />
      {/* <Testimonials /> */}
      {/* <Contact2 /> */}
      <Footer2 />
    </div>
  );
}
