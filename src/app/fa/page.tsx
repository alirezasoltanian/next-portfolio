// @ts-nocheck
"use client";
import About2 from "@/components/about/About2";
import Experience2 from "@/components/experience/Experience2";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";
import Nav from "@/components/nav/Nav";
import Portfolio2 from "@/components/portfolio/Portfolio2";
import Skills from "@/components/skills/Skills2";
import useViewRef from "@/hooks/useViewRef";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
    <div className="homeflow overflow-x-hidden">
      {/* <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20'
        fill='white'
      /> */}
      <Link className="language2 " href={pathname.includes("fa") ? "/" : "/fa"}>
        English
      </Link>

      <Header2 firstRef={firstRef} />
      <Nav active={active} />
      <About2 aboutRef={aboutRef} />
      <Experience2 />
      <Skills experienceRef={experienceRef} />
      {/* <Services /> */}
      <Portfolio2 portfolioRef={portfolioRef} />
      {/* <Testimonials /> */}
      {/* <Contact2 /> */}
      <Footer2 />
    </div>
  );
}
