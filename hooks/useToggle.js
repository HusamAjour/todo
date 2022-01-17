import { useState } from "react";

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  return [
    value,
    () => {
      setValue((currentValue) =>
        typeof value === "boolean" ? !value : currentValue
      );
    },
  ];
}
