import { createContext, useState, type ReactNode, useContext } from "react";

type Player = {
  name: string;
  score: number;
};

type PlayerContextType = {
  player: Player;
  setPlayer: React.Dispatch<React.SetStateAction<Player>>;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

type PlayerProviderProps = {
  children: ReactNode;
};

export function PlayerProvider({ children }: PlayerProviderProps) {
  const [player, setPlayer] = useState<Player>({ name: "", score: 0 });
  const value = { player, setPlayer };

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
