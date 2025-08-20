import { useEffect, useState } from "react";
import Modal from "../components/ui/Modal";
import waldoEasy from "../assets/waldo_beach_large.jpg";
import Countdown from "../components/Countdown";
import { usePlayer } from "../context/playerContext";
import { useCounter } from "../context/counterContext";
import { useAllPlayers } from "../context/allPlayersContext";
import convertTime from "../utils/timeFormat";
import getMouseClickPosition from "../utils/getMouseCoordinates";
import Select from "../components/ui/Select";
function Game() {
  type MousePos = {
    xScreen: number;
    yScreen: number;
    xImage: number;
    yImage: number;
  };

  type ImageProperties = {
    top: number;
    left: number;
    naturalWidth: number;
    naturalHeight: number;
    onScreenWidth: number;
    onScreenHeight: number;
  };
  const [mousePos, setMousePos] = useState<MousePos>({
    xScreen: 0,
    yScreen: 0,
    xImage: 0,
    yImage: 0,
  });

  const [message, setMessage] = useState<string>(
    "Click on the image and find Waldo and his friends!"
  );
  const [isOver, setIsOver] = useState<boolean>(false);
  const { player, setPlayer } = usePlayer();
  const { counter, setCounter } = useCounter();
  const { setAllPlayers } = useAllPlayers();
  const { minutes, secs } = convertTime(counter); // get original
  const [onScreenImageSize, setOnScreenImageSize] = useState<ImageProperties>({
    top: 0,
    left: 0,
    naturalWidth: 0,
    naturalHeight: 0,
    onScreenWidth: 0,
    onScreenHeight: 0,
  });

  // const image dimensions

  const [hasStarted, setHasStarted] = useState(false);
  // original image dimensions
  const [outsideImageClick, setOutsideImageClick] = useState(false);
  // removes the dropdown is the user clicks away

  const handleScreenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { x, y } = getMouseClickPosition(e);
    const naturalWidth = onScreenImageSize.naturalWidth;

    const aspectRatio = naturalWidth / onScreenImageSize.onScreenWidth;
    const xRealImage = x * aspectRatio;
    const yRealImage = y * aspectRatio;
    setHasStarted(true);
    setMousePos({
      xScreen: x,
      yScreen: y,
      xImage: xRealImage,
      yImage: yRealImage,
    });
    if (
      x < onScreenImageSize.left ||
      x > onScreenImageSize.onScreenWidth + onScreenImageSize.left ||
      y < onScreenImageSize.top ||
      y > onScreenImageSize.onScreenHeight + onScreenImageSize.top
    ) {
      setOutsideImageClick(true);
    } else {
      setOutsideImageClick(false);
      setMousePos({
        xScreen: x,
        yScreen: y,
        xImage: (x - onScreenImageSize.left) * aspectRatio,
        yImage: (y - onScreenImageSize.top) * aspectRatio,
      });
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();
    setOnScreenImageSize({
      top: rect.top,
      left: rect.left,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      onScreenWidth: rect.width,
      onScreenHeight: rect.height,
    });
  };

  useEffect(() => {
    setCounter(0);
    if (isOver) {
      setPlayer({ name: player.name, score: `${minutes}:${secs}` });
      setAllPlayers((prevArray) => {
        return [...prevArray, { name: player.name, score: counter }];
      });
      // setMessage(`You found Waldo in ${minutes}min${secs}sec !!`);
    }
  }, [isOver]);

  return (
    <div
      className="hero bg-base-200 min-h-screen"
      onClick={(e) => handleScreenClick(e)}
    >
      <Modal />
      <div className="hero-content text-center flex-col">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Good luck {player.name}!</h1>
          <Countdown isOver={isOver} />
          <p>{message}</p>
        </div>
        <div className="">
          {!hasStarted || isOver || outsideImageClick ? null : (
            <>
              <Select
                dropdownXPos={mousePos.xScreen}
                dropdownYPos={mousePos.yScreen}
                imageX={mousePos.xImage}
                imageY={mousePos.yImage}
                setIsOver={setIsOver}
                setMessage={setMessage}
              />
            </>
          )}

          <img
            // onClick={(e) => handleImageClicks(e)}
            src={waldoEasy}
            className=" cursor-pointer max-w-6xl rounded-lg shadow-2xl"
            onLoad={(e) => handleImageLoad(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default Game;
