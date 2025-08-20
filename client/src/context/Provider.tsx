import type { ReactNode } from "react";
import { CounterProvider } from "./counterContext";
import { PlayerProvider } from "./playerContext";
import { AllPlayersProvider } from "./allPlayersContext";
type Props = {
  children: ReactNode;
};
function Provider({ children }: Props) {
  return (
    <AllPlayersProvider>
      <CounterProvider>
        <PlayerProvider>{children}</PlayerProvider>
      </CounterProvider>
    </AllPlayersProvider>
  );
}

export default Provider;
