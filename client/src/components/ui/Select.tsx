import { useEffect, useState, type Dispatch } from "react";
import whoWasFound from "../../utils/whoWasFound";
import { usePlayer } from "../../context/playerContext";
type Props = {
  dropdownXPos: number;
  dropdownYPos: number;
  imageX: number;
  imageY: number;
  setIsOver: Dispatch<React.SetStateAction<boolean>>;
  setMessage: Dispatch<React.SetStateAction<string>>;
};

function Select({
  dropdownXPos,
  dropdownYPos,
  imageX,
  imageY,
  setIsOver,
  setMessage,
}: Props) {
  const [character, setCharacter] = useState("");
  const { player, setPlayer } = usePlayer();

  useEffect(() => {
    if (!character) return;

    const isFound = whoWasFound(imageX, imageY, character);
    if (isFound) {
      setIsOver(true);
      setPlayer({ name: player.name, score: player.score });
      setMessage(`You found ${character}!`);
    } else {
      setMessage("Try again");
    }

    // reset so the same option can be picked again
    setCharacter("");
  }, [character]);

  return (
    <div
      style={{
        top: `${dropdownYPos}px`,
        left: `${dropdownXPos}px`,
      }}
      className="absolute -z-0 bg-base-100 w-50"
    >
      <select
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
        className="select select-ghost -z-0 border-black"
      >
        <option disabled={false}>Pick a character</option>
        <option>Waldo</option>
        <option>Wizard</option>
        <option>Wilma</option>
      </select>
    </div>
  );
}

export default Select;
