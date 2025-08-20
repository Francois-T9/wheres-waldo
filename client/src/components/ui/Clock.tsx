import React from "react";

interface ClockProps {
  hours: number;
  minutes: number;
  secs: number;
}
function Clock({ hours, minutes, secs }: ClockProps) {
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

export default Clock;
