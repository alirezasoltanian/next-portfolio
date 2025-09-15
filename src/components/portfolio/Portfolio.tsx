// @ts-nocheck

"use client";

import React, { useEffect, useState } from "react";
import "./portfolio.css";

import { cn } from "@/utils/cn";

import { AnimatePresence, motion } from "framer-motion";

import { PortfolioJson } from "@/lib/constants";

const Portfolio = ({ portfolioRef }) => {
  const [popular, setPopular] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);
  const [activeGenre, setActiveGenre] = React.useState();
  const filterHandler = (e) => {
    setActiveGenre(e.target.value);
    setFiltered(
      PortfolioJson.filter((product) =>
        product.name.toLowerCase().includes(e.target.value)
      )
    );
  };
  useEffect(() => {
    setFiltered(PortfolioJson);
  }, []);

  return (
    <section ref={portfolioRef} id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="button-choose">
        <button
          style={{ borderRadius: "10px 0px 0px 10px" }}
          className={!activeGenre ? "btn btn-primary" : "btn"}
          onClick={filterHandler}
        >
          All
        </button>
        <button
          style={{ borderRadius: "0px 0px 0px 0px" }}
          className={activeGenre === "frontend" ? "btn btn-primary" : "btn"}
          value="frontend"
          onClick={filterHandler}
        >
          Full Stack
        </button>
        <button
          style={{ borderRadius: "0px 0px 0px 0px" }}
          className={activeGenre === "solidity" ? "btn btn-primary" : "btn"}
          value="solidity"
          onClick={filterHandler}
        >
          Solidity
        </button>
        <button
          style={{ borderRadius: "0px 10px 10px 0px" }}
          className={activeGenre === "figma" ? "btn btn-primary" : "btn"}
          value="figma"
          onClick={filterHandler}
        >
          UI/UX
        </button>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="900"
        className="container portfolio__container"
      >
        <AnimatePresence mode="wait">
          {filtered.map(
            ({ id, image, title, github, demo, name, disable }, i) => {
              return (
                <motion.artifact
                  variants={{
                    hidden: (i) => ({
                      opacity: 0,
                      // scale: 0.5 * i,
                      scale: 0.5,
                    }),
                    visible: (i) => ({
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: i * 0.1,
                      },
                    }),
                    removed: {
                      opacity: 0,
                      scale: 0,
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="removed"
                  custom={i}
                  key={id}
                  style={{
                    backgroundImage: `linear-gradient(rgba(229,229,229,0.7) 0%, rgba(150,150,150 , 0.93) 100%) , url(${image})`,
                  }}
                  className="portfolio__item"
                >
                  <div className="portfolio__cover">
                    <div className="portfolio__item-image">
                      <img
                        className="min-h-[193px] md:min-h-[225px] "
                        src={image}
                        alt=""
                      />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      {!disable.includes("code") && (
                        <a
                          href={github}
                          className="btn"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Github
                        </a>
                      )}
                      {!disable.includes("demo") && (
                        <a
                          href={demo}
                          className="btn btn-primary"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.artifact>
              );
            }
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
