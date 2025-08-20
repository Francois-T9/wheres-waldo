// function that inputs user x and y mouse click and outputs the character found (if found)

const whoWasFound = (xPos: number, yPos: number, character: string) => {
  let characterFound = "";

  const waldoXmin: number = 1819;

  const waldoXmax: number = 1893;

  const waldoYmin: number = 699;

  const waldoYmax: number = 815;

  if (
    waldoXmin < xPos &&
    waldoXmax > xPos &&
    waldoYmin < yPos &&
    waldoYmax > yPos &&
    character == "Waldo"
  ) {
    characterFound = "Waldo";
    return characterFound;
  } else {
    return false;
  }
};

export default whoWasFound;
