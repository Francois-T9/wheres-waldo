import ToggleTheme from "./ui/ToggleTheme";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 w-full z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Where's Waldo?</a>
      </div>
      <div className="flex-none">
        <ToggleTheme />
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
