import AWS from "./Svg/Aws";
import Bun from "./Svg/Bun";
import ExpressJs from "./Svg/ExpressJs";
import Figma from "./Svg/Figma";
import Github from "./Svg/Github";
import JavaScript from "./Svg/Javascript";
import MongoDB from "./Svg/MongoDB";
import NextJs from "./Svg/Nextjs";
import NodeJs from "./Svg/Nodejs";
import PostgreSQL from "./Svg/PostgreSql";
import Postman from "./Svg/Postman";
import Prisma from "./Svg/Prisma";
import ReactIcon from "./Svg/ReactIcon";
import Shadcn from "./Svg/Shadcn";
import TailwindCss from "./Svg/Tailwind";
import TypeScript from "./Svg/Typescript";
import Vercel from "./Svg/Vercel";
import SkillTab from "./ui/Skill";

export default function Technologies() {
  return (
    <div className="
      flex flex-col md:flex-row
      items-center md:items-center
      gap-8 md:gap-12
      px-6 md:px-12 py-6
      justify-center

    ">

      <div className="flex flex-col items-start md:items-start ">
        <span className="font-satoshi font-bold text-[#666] text-2xl text-center md:text-left">
          Skills
        </span>

        <div className="flex flex-wrap justify-start gap-3 max-w-lg md:max-w-xl mt-4">

          <SkillTab href="https://nextjs.org" icon={<NextJs />} label="Next.js" />
          <SkillTab href="https://react.dev" icon={<ReactIcon />} label="React.js" />
          <SkillTab href="https://expressjs.com" icon={<ExpressJs />} label="Express.js" />
          <SkillTab href="https://aws.amazon.com" icon={<AWS />} label="AWS" />
          <SkillTab href="https://tailwindcss.com" icon={<TailwindCss />} label="Tailwind CSS" />
          <SkillTab href="https://figma.com" icon={<Figma />} label="Figma" />
          <SkillTab href="https://github.com" icon={<Github />} label="Github" />
          <SkillTab href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" icon={<JavaScript />} label="JavaScript" />
          <SkillTab href="https://mongodb.com" icon={<MongoDB />} label="MongoDB" />
          <SkillTab href="https://nodejs.org" icon={<NodeJs />} label="Node.js" />
          <SkillTab href="https://postgresql.org" icon={<PostgreSQL />} label="PostgreSQL" />
          <SkillTab href="https://bun.com" icon={<Bun/>} label="Bun"/>
          <SkillTab href="https://postman.com" icon={<Postman />} label="Postman" />
          <SkillTab href="https://prisma.io" icon={<Prisma />} label="Prisma" />
          <SkillTab href="https://ui.shadcn.com" icon={<Shadcn />} label="Shadcn" />
          <SkillTab href="https://typescriptlang.org" icon={<TypeScript />} label="TypeScript" />
          <SkillTab href="https://vercel.com" icon={<Vercel />} label="Vercel" />
        </div>
      </div>
    </div>
  );
}

