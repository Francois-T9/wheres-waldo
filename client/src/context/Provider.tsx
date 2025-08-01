import type { ReactNode } from "react";
import { CounterProvider } from "./counterContext";
import { PlayerProvider } from "./playerContext";

type Props = {
  children: ReactNode;
};
function Provider({ children }: Props) {
  return (
    <CounterProvider>
      <PlayerProvider>{children}</PlayerProvider>
    </CounterProvider>
  );
}

export default Provider;
