import React from "react";
import { FiGithub, FiGlobe } from "react-icons/fi";

interface ProjectCardTypes {
  title: string;
  description: string;
  image?: string;
  website: string;
  github: string;
  frameworks?: React.ReactNode[];
}
export default function ProjectCard({
  title,
  description,
  image,
  website,
  github,
  frameworks,
}: ProjectCardTypes) {
  return (
    <div className="border border-[#666] rounded-xl p-3 w-72 md:w-[260px] bg-transparent text-[#ccc] mx-auto min-h md:min-h font-satoshi">
      <div className="flex items-center justify-between mb-1">
        <h2 className="font-bold text-xl md:text-md text-[#666]">{title}</h2>

        <div className="flex gap-4">
          {website && (
            <div className="relative group inline-block">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-blue-200 text-black font-bold font-satoshi text-xs px-2 py-1 rounded shadow-md pointer-events-none whitespace-nowrap">
                Website
              </div>
              <a href={website} target="_blank" rel="noopener noreferrer">
                <FiGlobe
                  className="text-[#666] hover:text-black cursor-pointer"
                  size={18}
                />
              </a>
            </div>
          )}
          {github && (
            <div className="relative group inline-block">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-blue-200 text-black font-bold font-satoshi text-xs px-2 py-1 rounded shadow-md pointer-events-none whitespace-nowrap">
                GitHub
              </div>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FiGithub
                  className="text-[#666] hover:text-black cursor-pointer"
                  size={18}
                />
              </a>
            </div>
          )}
        </div>
      </div>

      <p className="text-xs md:text-xs leading-4 mb-3 text-[#666] text-justify">
        {description}
      </p>

      {frameworks && frameworks.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-[#666] mb-2">
            Technologies
          </h3>
          <div className="flex gap-2">
            {frameworks.map((fw, i) => (
              <div key={i}>{fw}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
