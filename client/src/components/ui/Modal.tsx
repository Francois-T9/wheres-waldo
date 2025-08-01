import { Link } from "react-router-dom";
import { usePlayer } from "../../context/playerContext";
function Modal() {
  const { setPlayer } = usePlayer();
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-accent"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Play now!
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg">Enter player name</h3>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Player name</legend>
            <div className="join">
              <input
                type="text"
                className="input join-item"
                placeholder="John Doe"
                onChange={(e) => setPlayer({ name: e.target.value })}
              />
              <button className="btn join-item">
                {" "}
                <Link to="/game">Play now!</Link>
              </button>
            </div>
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
