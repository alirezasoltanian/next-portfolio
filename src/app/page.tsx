// @ts-nocheck

"use client";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Skills from "@/components/skills/Skills";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Nav from "@/components/nav/Nav";
import scrollTOStartPage from "@/components/scroll-to-first-page/scroll-to-first-page";
import Portfolio from "@/components/portfolio/Portfolio";
import { LampContainer } from "@/components/ui/Lamp";
import { Spotlight } from "@/components/ui/Spotlight";
import useViewRef from "@/hooks/useViewRef";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ScrollTOStartPage from "@/components/scroll-to-start-page/scroll-to-start-page";
import Experience from "@/components/experience/Experience";
export default function Home() {
  const [active, setActive] = useState("first");

  const [firstRef, isInFirstView] = useViewRef();
  const [aboutRef, isInAboutView] = useViewRef();
  const [experienceRef, isInExperienceView] = useViewRef();
  const [portfolioRef, isInPortfolioView] = useViewRef();
  const pathname = usePathname();
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
    <div className='homeflow  overflow-x-hidden'>
      <Link className='language' href={pathname.includes("fa") ? "/" : "/fa"}>
        persian
      </Link>
      <Header firstRef={firstRef} />

      <Nav active={active} />
      <About aboutRef={aboutRef} />
      <Experience />
      <Skills experienceRef={experienceRef} />
      {/* <Services /> */}
      <Portfolio portfolioRef={portfolioRef} />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}
