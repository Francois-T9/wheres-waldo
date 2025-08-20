import { createContext, useContext, useState, type ReactNode } from "react";

type CounterContextType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

type CounterProviderProps = {
  children: ReactNode;
};

export function CounterProvider({ children }: CounterProviderProps) {
  const [counter, setCounter] = useState<number>(0);
  const value = { counter, setCounter };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
