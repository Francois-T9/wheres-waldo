import { useCounter } from "../context/counterContext";
import { useEffect } from "react";
import convertTime from "../utils/timeFormat";
import Clock from "./ui/Clock";
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
      <Clock hours={hours} minutes={minutes} secs={secs} />
    </div>
  );
}

export default Countdown;
