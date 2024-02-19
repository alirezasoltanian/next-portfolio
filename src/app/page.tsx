"use client";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Nav from "@/components/nav/Nav";
import Portfolio from "@/components/portfolio/Portfolio";
import { LampContainer } from "@/components/ui/Lamp";
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
    <div className='homeflow overflow-hidden'>
      <Link className='language' href='/fa'>
        persian
      </Link>
      <Header firstRef={firstRef} />
      <Nav active={active} />
      <About aboutRef={aboutRef} />
      <Experience experienceRef={experienceRef} />
      {/* <Services /> */}
      <Portfolio portfolioRef={portfolioRef} />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}
