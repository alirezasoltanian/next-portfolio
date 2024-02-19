// @ts-nocheck
'use client'
import About2 from "@/components/about/About2";
import Contact2 from "@/components/contact/Contact2";
import Experience2 from "@/components/experience/Experience2";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";
import Nav from "@/components/nav/Nav";
import Portfolio2 from "@/components/portfolio/Portfolio2";
import useViewRef from "@/hooks/useViewRef";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
    <div className='homeflow'>
      <Link className='language2' href='/'>
        English
      </Link>

      <Header2 firstRef={firstRef} />
      <Nav active={active} />
      <About2 aboutRef={aboutRef} />
      <Experience2 experienceRef={experienceRef} />
      {/* <Services /> */}
      <Portfolio2 portfolioRef={portfolioRef} />
      {/* <Testimonials /> */}
      <Contact2 />
      <Footer2 />
    </div>
  );
}
