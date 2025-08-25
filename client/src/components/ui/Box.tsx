type Props = {
  boxWidth: number;
  boxHeight: number;
  boxXPos: number;
  boxYPos: number;
};

export default function Box({ boxWidth, boxHeight, boxXPos, boxYPos }: Props) {
  return (
    <div
      style={{
        width: `${boxWidth}px`,
        height: `${boxHeight}px`,
        top: `${boxYPos + boxHeight / 2}px`,
        left: `${boxXPos - boxWidth / 2}px`,
      }}
      className="relative border-black border-4 -z-0"
    ></div>
  );
}
