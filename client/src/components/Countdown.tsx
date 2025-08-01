import { useCounter } from "../context/counterContext";
import React from "react";
import { useEffect } from "react";
import convertTime from "../utils/TimeFormat";
function Countdown({ isOver }: { isOver: boolean }) {
  const { counter, setCounter } = useCounter();
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOver) {
        setCounter((prev) => prev + 1);
      } else {
        setCounter(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isOver]);

  const { hours, minutes, secs } = convertTime(counter);

  return (
    <div>
      {/* For TSX uncomment the commented types below */}
      <span className="countdown font-mono text-2xl">
        <span
          style={{ "--value": hours } as React.CSSProperties}
          aria-live="polite"
        >
          {hours}
        </span>
        :
        <span
          style={{ "--value": minutes } as React.CSSProperties}
          aria-live="polite"
        >
          {minutes}
        </span>
        :
        <span
          style={{ "--value": secs } as React.CSSProperties}
          aria-live="polite"
        >
          {secs}
        </span>
      </span>
    </div>
  );
}

export default Countdown;
