import { usePlayer } from "../context/playerContext";

function Leaderboard() {
  const { player } = usePlayer();
  console.log(player);
  return (
    <div className="hero bg-base-200 min-h-screen flex items-start justify-center p-4">
      <ul className="list bg-base-100 rounded-box shadow-md w-[50%]">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Players ranking
        </li>

        <li className="list-row">
          <div className="text-4xl font-thin opacity-30 tabular-nums">1</div>
          <div></div>
          <div className="list-col-grow">
            <div>Dio Lupa</div>
          </div>
        </li>

        <li className="list-row">
          <div className="text-4xl font-thin opacity-30 tabular-nums">2</div>
          <div></div>
          <div className="list-col-grow">
            <div>Ellie Beilish</div>
          </div>
        </li>

        <li className="list-row">
          <div className="text-4xl font-thin opacity-30 tabular-nums">3</div>
          <div></div>
          <div className="list-col-grow">
            <div>Sabrino Gardener</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Leaderboard;
