import ExpressJs from "./Svg/ExpressJs";
import MongoDB from "./Svg/MongoDB";
import NodeJs from "./Svg/Nodejs";
import ReactIcon from "./Svg/ReactIcon";
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
