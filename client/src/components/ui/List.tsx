import { useEffect } from "react";
import Checkbox from "./Checkbox";
type Props = {
  foundCharacters: string[];
};

function List({ foundCharacters }: Props) {
  useEffect(() => {}, [foundCharacters]);
  const checkCharacter = (char: string): boolean => {
    const found = foundCharacters.find((c) => char === c);

    if (found) return true;
    else return false;
  };

  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Characters to be found
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://www.clipartmax.com/png/middle/440-4407054_waldo-sticker-draw-wheres-wally.png"
            />
          </div>
          <div className="list-col-grow">
            <div>Waldo</div>
          </div>
          <Checkbox isFound={checkCharacter("Waldo")} />
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://i.pinimg.com/originals/76/eb/91/76eb9195acfd5a9e0c0567bf78d550c0.jpg"
            />
          </div>
          <div className="list-col-grow">
            <div>Wizard</div>
          </div>
          <Checkbox isFound={checkCharacter("Wizard")} />
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img4.wikia.nocookie.net/__cb20071001044014/waldo/images/3/3e/Character.Wenda.jpg"
            />
          </div>
          <div className="list-col-grow">
            <div>Wilma</div>
          </div>
          <Checkbox isFound={checkCharacter("Wilma")} />
        </li>
        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img2.wikia.nocookie.net/__cb20071001053010/waldo/images/4/45/Character.Odlaw.jpg"
            />
          </div>
          <div className="list-col-grow">
            <div>Odlaw</div>
          </div>
          <Checkbox isFound={checkCharacter("Odlaw")} />
        </li>
      </ul>
    </div>
  );
}

export default List;
