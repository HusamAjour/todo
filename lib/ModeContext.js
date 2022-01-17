import { createContext, useEffect, useState, useContext } from "react";

const ModeContext = createContext();
const SetModeContext = createContext();

export function useMode() {
  return useContext(ModeContext);
}

export function useSetMode() {
  return useContext(SetModeContext);
}

export function ModeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((currentMode) => {
      if (currentMode === "light") return "dark";
      return "light";
    });
  };

  return (
    <ModeContext.Provider value={mode}>
      <SetModeContext.Provider value={toggleMode}>
        {children}
      </SetModeContext.Provider>
    </ModeContext.Provider>
  );
}
