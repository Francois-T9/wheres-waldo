import { createContext, useState, type ReactNode, useContext } from "react";

interface Player {
  name: string;
  score: number;
}

type AllPlayersContextType = {
  getAllPlayers: () => void;
  allPlayers: Array<Player>;
};

const AllPlayersContext = createContext<AllPlayersContextType | undefined>(
  undefined
);

type AllPlayersProviderProps = {
  children: ReactNode;
};

export function AllPlayersProvider({ children }: AllPlayersProviderProps) {
  const [allPlayers, setAllPlayers] = useState<Array<Player>>([]);

  const getAllPlayers = async () => {
    const response = await fetch("http://localhost:3000/api/players", {
      method: "GET",
    });
    const data = await response.json();
    setAllPlayers(data);
  };
  const value = { getAllPlayers, allPlayers };
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
