import React from "react";

function Clock() {
  return (
    <div>
      {/* For TSX uncomment the commented types below */}
      <span className="countdown font-mono text-2xl">
        <span
          style={{ "--value": 10 } /* as React.CSSProperties */}
          aria-live="polite"
          aria-label={counter}
        >
          10
        </span>
        h
        <span
          style={{ "--value": 24 } /* as React.CSSProperties */}
          aria-live="polite"
          aria-label={counter}
        >
          24
        </span>
        m
        <span
          style={{ "--value": 59 } /* as React.CSSProperties */}
          aria-live="polite"
          aria-label={counter}
        >
          59
        </span>
        s
      </span>
    </div>
  );
}

export default Clock;
