import { useNavigate } from "react-router-dom";
import { usePlayer } from "../../context/playerContext";
import { useState } from "react";
function Modal() {
  const navigate = useNavigate();
  const { createPlayer, error } = usePlayer();

  const [playerName, setPlayerName] = useState<string>("");

  const handleRedirect = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await createPlayer(playerName);
    if (res.success) {
      // ✅ only navigate if no errors
      navigate("/game");
    } else {
      // errors are already set in state, just don’t navigate
    }
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-accent"
        onClick={() =>
          (
            document.getElementById("my_modal_1") as HTMLDialogElement
          ).showModal()
        }
      >
        Play now!
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg">Enter player name</h3>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Player name</legend>
            <form className="join" onSubmit={handleRedirect} method="post">
              <input
                type="text"
                name="player"
                className="input join-item"
                placeholder="John Doe"
                onChange={(e) => setPlayerName(e.target.value)}
              />
              <button type="submit" className="btn join-item">
                Play now!
              </button>
              {error ? <p className="text-red-500">{error}</p> : null}
            </form>
          </fieldset>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn  ">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
