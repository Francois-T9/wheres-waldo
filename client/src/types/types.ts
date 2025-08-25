import { type Dispatch } from "react";
export type MousePos = {
  xScreen: number;
  yScreen: number;
  xImage: number;
  yImage: number;
};

export type ImageProperties = {
  top: number;
  left: number;
  naturalWidth: number;
  naturalHeight: number;
  onScreenWidth: number;
  onScreenHeight: number;
};

export type Character = {
  id: number;
  name: string;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
};

export type SelectProps = {
  dropdownXPos: number;
  dropdownYPos: number;
  imageX: number;
  imageY: number;
  setIsOver: Dispatch<React.SetStateAction<boolean>>;
  setMessage: Dispatch<React.SetStateAction<string>>;
  characters: Character[];
  setFoundCharacters: Dispatch<React.SetStateAction<string[]>>;
};
