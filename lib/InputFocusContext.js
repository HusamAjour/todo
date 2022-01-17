import { createContext, useEffect, useState, useContext, useRef } from "react";

const InputRef = createContext();

export function useInputRef() {
  return useContext(InputRef);
}

export function InputRefProvider({ children }) {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <InputRef.Provider value={{ inputRef, focusInput }}>
      {children}
    </InputRef.Provider>
  );
}
