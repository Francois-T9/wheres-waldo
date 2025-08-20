import { Link, useNavigate } from "react-router-dom";
import { usePlayer } from "../../context/playerContext";
import { useState, type ChangeEvent } from "react";
function Modal() {
  const navigate = useNavigate();
  const { setPlayer } = usePlayer();

  const [error, setError] = useState<string>("Player name cannot be empty");
  const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    if (name.length == 0) {
      setError("Player name cannot be empty");
    } else {
      setError("");
      setPlayer({ name: name, score: "0" });
    }
  };

  const handleRedirect = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!error) {
      navigate("/game");
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
            <div className="join">
              <input
                type="text"
                className="input join-item"
                placeholder="John Doe"
                onChange={(e) => validateInput(e)}
              />
              <button className="btn join-item">
                {" "}
                <Link to="#" onClick={handleRedirect}>
                  Play now!
                </Link>
              </button>
              {error ? <p className="text-red-500">{error}</p> : null}
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
