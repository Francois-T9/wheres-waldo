import { useEffect } from "react";
import { useAllPlayers } from "../context/allPlayersContext";
import sortArrayByScore from "../utils/sortArrayByScore";
function Leaderboard() {
  const { getAllPlayers, allPlayers } = useAllPlayers();

  useEffect(() => {
    async function fetchData() {
      await getAllPlayers();
    }
    fetchData();
  }, []);
  const sortedPlayers = sortArrayByScore(allPlayers);

  return (
    <div className="hero bg-base-200 min-h-screen flex items-start justify-center p-4">
      <div className="overflow-x-auto">
        <table className="table table-xl ">
          {/* head */}
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          {sortedPlayers.map((player, key) => (
            <tbody>
              {/* row 1 */}
              <tr>
                <th>{key + 1}</th>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
              {/* row 2 */}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
