import { createContext, useEffect, useState, useContext } from "react";

const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState("all");

  const changeFilter = (f) => {
    setFilter(f);
  };

  return (
    <FilterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
