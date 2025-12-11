"use client";
import { useState } from "react";

interface CourseItem {
  name: string;
  icon?: React.ReactNode;
}

interface InfoType {
  title: string;
  subtitle: string;
  year: string;
  description?: string;
  place?: string;
  coursework?: (string | CourseItem)[];
}

export default function EduTab({
  title,
  subtitle,
  year,
  description,
  place,
  coursework,
}: InfoType) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        group relative w-full transform
        transition-all duration-300 ease-in-out
        rounded-lg cursor-pointer
        hover:bg-blue-200 hover:scale-105 ${open ? "bg-blue-200 scale-105" : ""}
        px-3 py-2 md:-mx-3 md:px-3
      `}
      onClick={() => setOpen(!open)}
    >
      <div className="flex flex-row justify-between items-center gap-3 mb-1">
        <span
          className={`
            md:text-md text-sm font-bold tracking-tight
            transition-all duration-300 ease-in-out
            group-hover:text-[#006EC9]
          `}
        >
          {title}
        </span>

        <span className="md:text-sm text-xs">{year}</span>
      </div>

      <div className="flex flex-row items-center gap-2 mb-1">
        <div className="md:text-sm text-sm text-gray-600">{subtitle}</div>

        <div
          className={`
            flex items-center justify-center ml-0.5
            transition-all duration-150 ease-in-out
            ${open ? "rotate-180 opacity-100" : "rotate-0 opacity-0"}
            group-hover:opacity-100
          `}
        >
          <svg
            className="w-4 h-4 text-[#006EC9]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {place && (
          <div className="md:text-sm text-xs ml-auto text-gray-600">
            {place}
          </div>
        )}
      </div>

      <div
        className={`
          grid transition-all duration-300 ease-out
          ${
            open
              ? "grid-rows-[1fr] opacity-100 mt-4"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-3">
            {coursework && coursework.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2">Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, index) => {
                    const isString = typeof course === "string";
                    const courseName = isString ? course : course.name;
                    const courseIcon = isString ? null : course.icon;

                    return (
                      <span
                        key={index}
                        className="inline-flex items-center md:text-xs bg-blue-200 font-satoshi border-dashed border-black border py-1 px-2 rounded-lg skill-inner-shadow text-black"
                      >
                        {courseIcon && (
                          <div className="size-4 shrink-0">{courseIcon}</div>
                        )}
                        <p
                          className={`text-sm font-bold ${
                            courseIcon ? "ml-1" : ""
                          }`}
                        >
                          {courseName}
                        </p>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold mb-1 justify ">
                Description
              </h3>
              <p className="md:text-sm text-xs text-justify">
                {description ?? "Description goes here..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
