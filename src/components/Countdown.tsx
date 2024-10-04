import React, { useEffect, useState } from "react";

export function Countdown({ countdownTime }: { countdownTime: number }) {
  const [seconds, setSeconds] = useState(countdownTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownTime]);

  return <div>({seconds})</div>;
}
