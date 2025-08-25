import React from "react";

interface ClockProps {
  minutes: number;
  secs: number;
}
function Clock({ minutes, secs }: ClockProps) {
  return (
    <div>
      {/* For TSX uncomment the commented types below */}
      <span className="countdown font-mono text-2xl">
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

export default Clock;
