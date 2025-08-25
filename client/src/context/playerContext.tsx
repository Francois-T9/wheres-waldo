import { createContext, useState, type ReactNode, useContext } from "react";

type Player = {
  name: string;
  score: string;
};

type CreatePlayerResult = {
  success: boolean;
  player?: Player;
  errors?: string;
};

type PlayerContextType = {
  player: Player;
  createPlayer: (name: string, score?: string) => Promise<CreatePlayerResult>;
  updatePlayer: (name: string, newScore?: string) => Promise<void>;
  error: string;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

type PlayerProviderProps = {
  children: ReactNode;
};

export function PlayerProvider({ children }: PlayerProviderProps) {
  const [player, setPlayer] = useState<Player>({ name: "", score: "0" });
  const [error, setError] = useState<string>("");

  const createPlayer = async (
    name: string,
    score: string | undefined = undefined
  ): Promise<CreatePlayerResult> => {
    const response = await fetch("http://localhost:3000/api/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ player: name, score }),
    });
    const data = await response.json();
    if (data.errors) {
      setError(data.errors);
      return { success: false, errors: data.errors };
    } else {
      setError("");
      setPlayer(data);
      return { success: true, player: data };
    }
  };

  const updatePlayer = async (
    name: string,
    newScore?: string
  ): Promise<void> => {
    const response = await fetch("http://localhost:3000/api/players", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ player: name, score: newScore }),
    });
    const data = await response.json();
    if (data.error) {
      console.log("error updating player");
    } else {
      setPlayer(data);
    }
  };
  const value: PlayerContextType = {
    player,
    createPlayer,
    updatePlayer,
    error,
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
}
