import { useEffect, useState } from "react";
import whoWasFound from "../../utils/whoWasFound";
import type { SelectProps } from "../../types/types";

function Select({
  dropdownXPos,
  dropdownYPos,
  imageX,
  imageY,

  setMessage,
  characters,
  setFoundCharacters,
}: SelectProps) {
  const [selectedCharacter, setSelectedCharacter] = useState("");

  useEffect(() => {
    if (!selectedCharacter) return;

    const isFound = whoWasFound(imageX, imageY, selectedCharacter, characters);

    if (isFound) {
      // setIsOver(true);
      setFoundCharacters((prevArray) => [...prevArray, isFound]);
      setMessage(`You found ${selectedCharacter}!`);
    } else {
      setMessage("Try again");
    }

    // reset so the same option can be picked again
    setSelectedCharacter("");
  }, [selectedCharacter]);

  return (
    <div
      style={{
        top: `${dropdownYPos}px`,
        left: `${dropdownXPos}px`,
      }}
      className="absolute -z-0 bg-base-100 w-50"
    >
      <select
        value={selectedCharacter}
        onChange={(e) => setSelectedCharacter(e.target.value)}
        className="select select-ghost -z-0 border-black"
      >
        <option disabled={false}>Pick a character</option>
        {characters.map((charac) => (
          <option>{charac.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
