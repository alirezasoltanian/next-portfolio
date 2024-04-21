import React from "react";
import ExperienceCard from "./ExperienceCard";
const experienceData = [
  {
    company: "Arshivira",
    link: "https://parabol.co",
    badges: ["Nextjs", "Javascript", "tanstack", "shadcn/ui"],
    title: "Front-end Developer",
    start: "7 weeks",
    end: "2024",

    description:
      "an Canadian multi-platform startup, It is an architectural service, I developed it with nextjs14 And I used various other tools. The challenge was more Security section of admin portal and user account management It was from server action in different parts of the website.",
  },
  {
    company: "Parabol",
    link: "https://parabol.co",
    badges: ["React", "bootstrap"],
    title: "Front-end Developer",
    start: "4 weeks",
    end: "2024",
    description:
      "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
  },
];
function Experience2() {
  return (
    <div className='flex mt-2 flex-col px-12 justify-center items-center'>
      <h2 className='text-brand-foreground'>My experience</h2>
      <div className='flex gap-5 flex-wrap mt-2'>
        {experienceData.map((item, index) => (
          <div className='' key={index}>
            <ExperienceCard work={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience2;
