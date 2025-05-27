// @ts-nocheck

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useViewRef from "../../hooks/useViewRef";
import About from "../about/About";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Portfolio from "../portfolio/Portfolio";
import Experience from "../skills/Skills";
import "./home.css";
// import Services from '../services/Services'
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
      <Link className="language" href="/fa">
        persian
      </Link>
      <Header firstRef={firstRef} />
      <Nav active={active} />
      <About aboutRef={aboutRef} />
      <Experience experienceRef={experienceRef} />
      {/* <Services /> */}
      <Portfolio portfolioRef={portfolioRef} />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
