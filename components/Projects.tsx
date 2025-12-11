import NextJs from "./Svg/Nextjs";
import FrameworkIcon from "./ui/Icon";
import ProjectCard from "./ui/Project";
import ReactIcon from "./Svg/ReactIcon";
import TypeScript from "./Svg/Typescript";
import MongoDB from "./Svg/MongoDB";
import NodeJs from "./Svg/Nodejs";
import TailwindCss from "./Svg/Tailwind";
import ExpressJs from "./Svg/ExpressJs";
import Vercel from "./Svg/Vercel";
import Chartjs from "./Svg/Chartjs";
import Jwt from "./Svg/Jwt";
import PostgreSQL from "./Svg/PostgreSql";
import Gemini from "./Svg/Gemini";
import Shadcn from "./Svg/Shadcn";
import Prisma from "./Svg/Prisma";
import JavaScript from "./Svg/Javascript";
import Workers from "./Svg/Workers";
import Hono from "./Svg/Hono";

export default function Projects() {
  return (
    <div className="w-full px-6 md:px-12 py-6">
      <div className="w-full flex justify-center">
        <div className="flex flex-col max-w-lg md:max-w-xl w-full">
          <span className="font-satoshi font-bold text-2xl text-left md:text-left mb-4 text-[#666]">
            Projects
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
            <ProjectCard
              title="Travelio"
              description="Based on my learning of Generative AI, I built an AI Travel Planner that creates a day-to-day itinerary for you using AI."
              website="https://travelio-psi.vercel.app/"
              github="https://github.com/jaydxxp/Travelio"
              frameworks={[
                <FrameworkIcon icon={<NextJs />} name="Next.js" />,
                <FrameworkIcon icon={<ReactIcon />} name="React" />,
                <FrameworkIcon icon={<TypeScript />} name="Typescript" />,
                <FrameworkIcon icon={<MongoDB />} name="MongoDB" />,
                <FrameworkIcon icon={<NodeJs />} name="Nodejs" />,
                <FrameworkIcon icon={<TailwindCss />} name="TailwindCSS" />,
                <FrameworkIcon icon={<ExpressJs />} name="Express.js" />,
              ]}
            />

            <ProjectCard
              title="Expensio"
              description="A modern MERN Stack expense tracking platform with a clean dark UI, insightful analytics, and smart microservices"
              image="/expensio.jpg"
              website="https://expensio-rust.vercel.app/"
              github="https://github.com/jaydxxp/expensio"
              frameworks={[
                <FrameworkIcon icon={<TypeScript />} name="Typescript" />,
                <FrameworkIcon icon={<MongoDB />} name="MongoDB" />,
                <FrameworkIcon icon={<Jwt />} name="Json Web Token" />,
                <FrameworkIcon icon={<TailwindCss />} name="TailwindCSS" />,
                <FrameworkIcon icon={<NextJs />} name="Next.js" />,
                <FrameworkIcon icon={<Vercel />} name="Vercel" />,
                <FrameworkIcon icon={<Chartjs />} name="Chartjs" />,
              ]}
            />
            <ProjectCard
              title="ConioGPT"
              description="This Project is Basically a Social Media Assistant for Creators to get trendy and real time trending captions,song and more."
              image="/ConioGPT.png"
              website="https://conio-gpt.vercel.app/"
              github="https://github.com/jaydxxp/Coniogpt"
              frameworks={[
                <FrameworkIcon icon={<ReactIcon />} name="React" />,
                <FrameworkIcon icon={<MongoDB />} name="MongoDB" />,
                <FrameworkIcon icon={<Gemini />} name="Gemini" />,
                <FrameworkIcon icon={<Shadcn />} name="ShadCN" />,
                <FrameworkIcon icon={<ExpressJs />} name="ExpressJs" />,
              ]}
            />
            <ProjectCard
              title="Medium Clone"
              description="This is a Medium Blog Clone website made while learning Full Stack Development, with features inspired by the original platform."
              image="/Medium.png"
              website="https://medium-clone-olive-chi.vercel.app/"
              github="https://github.com/jaydxxp/medium_clone"
              frameworks={[
                <FrameworkIcon icon={<ReactIcon />} name="React" />,
                <FrameworkIcon icon={<PostgreSQL />} name="PostgreSQL" />,
                <FrameworkIcon icon={<Prisma />} name="Prisma" />,
                <FrameworkIcon icon={<JavaScript />} name="Javascript" />,
                <FrameworkIcon icon={<Workers />} name="Cloudflare Workers" />,
                <FrameworkIcon icon={<Hono />} name="Hono" />,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
