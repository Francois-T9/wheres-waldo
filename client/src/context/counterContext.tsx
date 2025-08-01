import { createContext, useContext, useState, ReactNode } from "react";

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

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
