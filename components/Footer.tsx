"use client";
import React, { useEffect, useState } from "react";
import AnimatedVisitorCount from "./ui/AnimatedVisitorCount";

export default function Footer() {
  const [time, setTime] = useState("");
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/views")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setVisitors(typeof data?.count === "number" ? data.count : null);
      })
      .catch((err) => {
        console.error("Visitor count error:", err);
        setVisitors(null);
      });

    function updateTime() {
      const now = new Date();
      const options = {
        hour: "2-digit" as const,
        minute: "2-digit" as const,
        hour12: true,
        timeZone: "Asia/Kolkata",
      };

      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    }

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-row items-stretch font-satoshi justify-center">
      <div className="w-full max-w-lg md:max-w-xl pb-8 mt-4">
        {typeof visitors === "number" && (
          <p className="mb-3 text-sm text-[#666] tracking-normal">
            You are the{" "}
            <span className="inline-flex items-center rounded-lg border border-dashed border-black bg-blue-200 px-2.5 py-1 text-base font-bold text-[#006EC9]">
              <AnimatedVisitorCount value={visitors} />
            </span>{" "}
            visitor.
          </p>
        )}

        <div className="flex items-center justify-between gap-4 border-t border-t-[#444] pt-2 text-xs">
          <div className="flex items-center gap-3 text-[#444]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#006EC9]" />
            <span className="font-medium">Mumbai, India</span>
          </div>
          <span className="shrink-0 text-[#666]">{time}</span>
        </div>
      </div>
    </div>
  );
}
