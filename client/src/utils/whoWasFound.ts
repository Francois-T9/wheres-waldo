import type { Character } from "../types/types";
const whoWasFound = (
  xPos: number,
  yPos: number,
  selectedCharacter: string,
  allCharacters: Character[]
): string | null => {
  const character = allCharacters.find(
    (c) =>
      c.xMin < xPos &&
      c.xMax > xPos &&
      c.yMin < yPos &&
      c.yMax > yPos &&
      selectedCharacter === c.name
  );

  if (character) {
    return character.name;
  }

  return null; // no match found
};

export default whoWasFound;
