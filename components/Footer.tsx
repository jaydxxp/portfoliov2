"use client"
import React, { useEffect, useState } from "react";
export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
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
    <div
      className="
        flex flex-row items-stretch
        font-satoshi justify-center
        py-12 
        "
    >

      <div className="flex items-center gap-3 text-xs text-[#444] border-t pt-2 border-t-[#444] md:w-140 w-70 pb-12 mt-12">
        <span className="w-2 h-2 bg-[#006EC9] rounded-full"></span>
        <span className="font-medium ">Mumbai, India</span>
        <span className="text-[#666]">{time}</span>
      </div>
    </div>
  );
}
