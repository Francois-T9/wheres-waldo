import { useState } from "react";
import Modal from "../components/ui/Modal";
import waldoEasy from "../assets/2687205.png";
import Countdown from "../components/Countdown";
import { usePlayer } from "../context/playerContext";
import { useCounter } from "../context/counterContext";
function Game() {
  const [message, setMessage] = useState<string>("You did not find Waldo");
  const [isOver, setIsOver] = useState<boolean>(false);
  const { player, setPlayer } = usePlayer();
  const { counter } = useCounter();

  const whoWasFound = (xPos: number, yPos: number) => {
    // Waldo position

    const waldoXmin: number = 490;

    const waldoXmax: number = 528;

    const waldoYmin: number = 258;

    const waldoYmax: number = 311;

    if (
      waldoXmin < xPos &&
      waldoXmax > xPos &&
      waldoYmin < yPos &&
      waldoYmax > yPos
    ) {
      setIsOver(true);
      setPlayer({ name: player.name, score: counter });
      setMessage(`You found Waldo in ${counter} secs!!`);

      return true;
    } else {
      return false;
    }
  };

  const getMouseClickPosition = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - Math.round(rect.top);
    whoWasFound(x, y);
    return { x, y };
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Modal />
      <div className="hero-content text-center flex-col">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Good luck {player.name}!</h1>
          <Countdown isOver={isOver} />
          <p>{message}</p>
        </div>
        <img
          onClick={(e) => getMouseClickPosition(e)}
          src={waldoEasy}
          className=" cursor-pointer max-w-6xl rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Game;
