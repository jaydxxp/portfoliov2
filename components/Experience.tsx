import ExpressJs from "./Svg/ExpressJs";
import Figma from "./Svg/Figma";
import MongoDB from "./Svg/MongoDB";
import NextJs from "./Svg/Nextjs";
import NodeJs from "./Svg/Nodejs";
import ReactIcon from "./Svg/ReactIcon";
import Shadcn from "./Svg/Shadcn";
import TailwindCss from "./Svg/Tailwind";
import TypeScript from "./Svg/Typescript";
import EduTab from "./ui/Edu";

export default function Experience() {
  return (
    <div
      className="
          flex flex-col md:flex-row
          items-center md:items-center
          gap-8 md:gap-12
          px-6 md:px-12 py-6
          justify-center

        "
    >
      <div className="flex flex-col items-start md:items-start font-satoshi text-[#666] max-w-lg md:max-w-xl w-full">
        <span className="font-satoshi font-bold text-2xl text-center md:text-left mb-4">
          Experience
        </span>
        <EduTab
  title="Judix"
  subtitle="Full Stack Developer Intern"
  year="March 2026 - May 2026"
  coursework={[
    { name: "React.js", icon: <ReactIcon /> },
    { name: "Node.js", icon: <NodeJs /> },
    { name: "Express.js", icon: <ExpressJs /> },
    { name: "Typescript", icon: <TypeScript /> },
   
    { name: "Tailwind CSS", icon: <TailwindCss /> },
    { name: "ShadCN", icon: <Shadcn /> },

  ]}
  description="Working on a scalable design system and developing admin dashboard workflows with integrated data scraping processes. Ensuring a well-structured and maintainable code architecture to support scalability and efficient system performance."
/>

<EduTab
  title="Astex AI"
  subtitle="Full Stack Developer Intern"
  year="February 2026 - March 2026"
  coursework={[
    { name: "Next.js", icon: <NextJs /> },
    { name: "React.js", icon: <ReactIcon /> },
    { name: "Tailwind CSS", icon: <TailwindCss /> },
    { name: "Figma", icon: <Figma /> },
    { name: "MongoDB", icon: <MongoDB /> },
  ]}
  description="Developed a complete client website with integrated Cashfree payment gateway, ensuring a seamless user experience using modern web technologies. Independently built the entire platform and designed an admin dashboard to efficiently manage and control system workflows."
/>
        <EduTab
          title="Acrylic Solutions"
          subtitle="SDE Intern"
          year="March 2025 - July 2025"
          coursework={[
            { name: "React.js", icon: <ReactIcon /> },
            { name: "MongoDB", icon: <MongoDB /> },
            { name: "Typescript", icon: <TypeScript /> },
            { name: "Express.js", icon: <ExpressJs /> },
            { name: "Node.js", icon: <NodeJs /> },
          ]}
          description="Worked on a government project to digitalize rural-area form submissions for certificates and licenses. Integrated the platform with official government APIs and services. Developed key backend and frontend features, and designed an intuitive, accessible user interface to enable seamless form submission and real-time application tracking."
        />
      </div>
    </div>
  );
}
