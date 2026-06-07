"use client";

import React, { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 4,
    minutes: 56,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 23;

              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Box = ({ value, label }: any) => (
    <div className="flex flex-col items-center bg-white/50 text-White rounded-lg px-2 py-1 w-14">
      <span className="text-sm font-semibold">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] opacity-70">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-2">
      <Box value={timeLeft.days} label="D" />
      <Box value={timeLeft.hours} label="H" />
      <Box value={timeLeft.minutes} label="M" />
      <Box value={timeLeft.seconds} label="S" />
    </div>
  );
}