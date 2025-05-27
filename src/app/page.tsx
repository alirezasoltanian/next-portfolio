// @ts-nocheck
"use client";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Nav from "@/components/nav/Nav";
import Portfolio from "@/components/portfolio/Portfolio";
import Skills from "@/components/skills/Skills";
import useViewRef from "@/hooks/useViewRef";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// export const rendering = "force-static";

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

    const activeView =
      Object.keys(viewStates).find((key) => viewStates[key]) || "";
    setActive(activeView);
  }, [isInFirstView, isInAboutView, isInExperienceView, isInPortfolioView]);

  return (
    <div className="homeflow  overflow-x-hidden">
      <Link className="language" href={pathname.includes("fa") ? "/" : "/fa"}>
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
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
