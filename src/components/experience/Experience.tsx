import React from "react";
import ExperienceCard from "./ExperienceCard";
const experienceData = [
  {
    company: "Arshivira",
    link: "https://parabol.co",
    badges: ["Nextjs", "Javascript", "tanstack", "shadcn/ui"],
    title: "Front-end Developer",
    start: "7 Months",
    end: "2024",

    description:
      "an Canadian multi-platform startup, It is an architectural service, I developed it with nextjs14 And I used various other tools. The challenge was more Security section of admin portal and user account management It was from server action in different parts of the website.",
  },
  {
    company: "Kasbino",
    link: "https://kasbinoapp.com/",
    badges: ["React", "bootstrap"],
    title: "Front-end Developer",
    start: "8 Months",
    end: "2024",
    description:
      "I worked for 8 months on a management dashboard and developed a tool for creating UI using Drag & Drop, which served as a UI Builder for management dashboards. The main challenge in this project was controlling and managing the Drag & Drop elements without using pre-built packages.",
  },
];
function Experience() {
  return (
    <div className="flex mt-2 flex-col px-12 justify-center items-center ">
      <h2 className="text-brand-foreground">My experience</h2>
      <div className="flex gap-5 flex-wrap mt-2">
        {experienceData.map((item, index) => (
          <div className="" key={index}>
            <ExperienceCard work={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
