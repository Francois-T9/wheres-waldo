import { useEffect } from "react";

type Props = {
  isFound: boolean;
};

function Checkbox({ isFound }: Props) {
  useEffect(() => {
    console.log(isFound);
  }, [isFound]);
  return (
    <div>
      <input
        type="checkbox"
        disabled
        checked={isFound}
        className={`checkbox ${isFound ? "bg-green-500" : ""}`}
      />
    </div>
  );
}

export default Checkbox;
