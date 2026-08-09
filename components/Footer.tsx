"use client";
import React, { useEffect, useState } from "react";
export default function Footer() {
  const [time, setTime] = useState("");
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Using a frequently used counter API
    fetch("https://api.counterapi.dev/v1/jaydeepw/visits/up")
      .then((res) => res.json())
      .then((data) => setViews(data.count))
      .catch((err) => {
        console.error("Counter error:", err);
        setViews(null);
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
    <div
      className="
        flex flex-row items-stretch
        font-satoshi justify-center"
    >
      <div className="flex items-center gap-3 text-xs text-[#444] border-t pt-2 border-t-[#444] w-full max-w-lg md:max-w-xl pb-12 mt-12">
        <span className="w-2 h-2 bg-[#006EC9] rounded-full"></span>
        <span className="font-medium ">Mumbai, India</span>
        <span className="text-[#666]">{time}</span>
        {views !== null && (
          <>
            <span className="text-[#aaa]">•</span>
            <span className="text-[#666] tracking-tighter">
              {views.toLocaleString()} views
            </span>
          </>
        )}
      </div>
    </div>
  );
}
