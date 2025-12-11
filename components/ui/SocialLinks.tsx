import React from "react";
import Resume from "../Svg/Resume";
import Github from "../Svg/Github";
import Linkedin from "../Svg/Linkedin";
import Arrow from "../Svg/Arrow";
import X from "../Svg/X";
import Email from "../Svg/Email";

type LinkItem = {
  href: string;
  label: string;
  svg: React.ReactNode;
};

export default function SocialLinks() {
  const items: LinkItem[] = [
    { href: "https://drive.google.com/file/d/1zaRGv5Io1x1sDeKuAMw4K0x6Dwo2_o-M/view", label: "resume", svg: <Resume /> },
    { href: "https://github.com/jaydxxp", label: "github", svg: <Github /> },
    { href: "https://www.linkedin.com/in/jaydeepwagaskar/", label: "linkedin", svg: <Linkedin /> },
    { href: "mailto:jaydeepwaghaskar@gmail.com", label: "email", svg: <Email /> },
    { href: "https://x.com/jayydeeppp", label: "X", svg: <X /> },
  ];

  return (
    <nav aria-label="social links" className="mt-4">
      <ul className="flex items-center justify-start md:justify-start gap-3 text-sm flex-wrap md:flex-nowrap font-satoshi ">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              target={
                it.href.startsWith("mailto:") || it.href.startsWith("/")
                  ? "_self"
                  : "_blank"
              }
              rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="
                group inline-flex items-center gap-0.5
                text-[#666]
                transition-colors
                no-underline
                hover:text-[#006EC9]
                hover:underline hover:decoration-[#006EC9] hover:decoration-2

                [&_svg]:text-[#666]
                group-hover:[&_svg]:text-[#006EC9]
              "
            >
              <span className="shrink-0 inline-flex w-[18px] h-[18px]" aria-hidden>
                {it.svg}
              </span>

              <span className="capitalize">{it.label}</span>

              <span
                className="
                  ml-px
                  w-[14px] h-[14px]
                  opacity-0 group-hover:opacity-100
                  transition-opacity
                  text-[#006EC9]
                  [&>svg]:w-full [&>svg]:h-full
                "
              >
                <Arrow />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
