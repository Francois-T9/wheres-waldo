import { createContext, useState, type ReactNode, useContext } from "react";

interface Player {
  name: string;
  score: number;
}

type AllPlayersContextType = {
  allPlayers: Array<Player>;
  setAllPlayers: React.Dispatch<React.SetStateAction<Array<Player>>>;
};

const AllPlayersContext = createContext<AllPlayersContextType | undefined>(
  undefined
);

type AllPlayersProviderProps = {
  children: ReactNode;
};

export function AllPlayersProvider({ children }: AllPlayersProviderProps) {
  const [allPlayers, setAllPlayers] = useState<Array<Player>>([]);
  const value: AllPlayersContextType = { allPlayers, setAllPlayers };

  return (
    <AllPlayersContext.Provider value={value}>
      {children}
    </AllPlayersContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAllPlayers() {
  const context = useContext(AllPlayersContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
}
