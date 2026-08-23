"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useState } from "react";

const STEP_MS = 220;
const MAX_STEPS = 55;
const SPIN_MS = 1100;

const slowTiming = {
  duration: SPIN_MS,
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
};

export default function AnimatedVisitorCount({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    setDisplay(0);

    if (value <= 0) {
      setDisplay(value);
      return;
    }

    const steps = Math.min(value, MAX_STEPS);
    const increment = Math.max(1, Math.ceil(value / steps));
    let current = 0;

    const timer = window.setInterval(() => {
      current = Math.min(current + increment, value);
      setDisplay(current);

      if (current >= value) {
        window.clearInterval(timer);
      }
    }, STEP_MS);

    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <NumberFlow
      value={display}
      locales="en-US"
      format={{ useGrouping: true }}
      transformTiming={slowTiming}
      spinTiming={slowTiming}
      opacityTiming={{ duration: 700, easing: "ease-out" }}
      className={`inline tabular-nums tracking-tight ${className ?? ""}`}
    />
  );
}
