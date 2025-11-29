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
  {
    company: "Solop",
    link: "https://solop.ir/",
    badges: [
      "Next.js",
      "Drizzle",
      "ai-sdk",
      "OpenAI",
      "Zustand",
      "Ethers",
      "NextAuth",
      "Shadcn",
      "Payment",
      "Socket.io",
      "Postgres",
      "Tailwind",
      "Nodemailer",
    ],
    title: "Full Stack Developer",
    start: "2024",
    end: "Present",
    description:
      "Solop is a platform for creating online stores with features to manage orders, products, users, and payment gateways. The system includes an AI assistant and a store agent to make the buying and selling experience smarter and easier for both customers and vendors.",
  },
  {
    company: "Dideban",
    link: "https://dideban.solop.ir/",
    badges: [
      "Next.js",
      "Drizzle",
      "ai-sdk",
      "OpenAI",
      "Zustand",
      "NextAuth",
      "Shadcn",
      "Payment",
      "Postgres",
      "Tailwind",
    ],
    title: "Full Stack Developer",
    start: "2025",
    end: "Present",
    description:
      "Dideban is a tool for the Divar platform that intelligently notifies users about new listings and important updates such as price or description changes. Notifications are delivered via chat and push alerts, providing a fast experience without the need for constant searching.",
  },
];
function Experience2() {
  return (
    <div className="flex mt-2 flex-col px-12 justify-center items-center">
      <h2 className="text-brand-foreground">سوابق کاری</h2>
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
export default Experience2;
