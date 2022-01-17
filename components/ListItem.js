import React, { useState } from "react";

import Image from "next/image";

import CrossIcon from "../public/images/icon-cross.svg";

import useToggle from "@/hooks/useToggle";
import { useMode } from "@/lib/ModeContext";

function ListItem({ id, text, checked }) {
  const borderStyle = {
    dark: "linear-gradient(hsl(235, 24%, 19%), hsl(235, 24%, 19%)) padding-box, linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box",
    light:
      "linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 100%)) padding-box, linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box",
  };
  const mode = useMode();
  const [isChecked, toggleChecked] = useToggle(checked || false);
  const [isHovered, toggleHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => toggleHovered(true)}
      onMouseLeave={() => toggleHovered(false)}
      className="relative w-full dark:bg-mode-dark bg-mode-light first:rounded-t-[5px] border-b border-border-light dark:border-border-dark"
    >
      <input
        className="absolute left-0 opacity-[0.01]"
        type="checkbox"
        id={id}
        value={isChecked}
        checked={isChecked}
        onChange={toggleChecked}
      />
      <label
        htmlFor={id}
        className={`block relative cursor-pointer text-[18px] mobile:text-[14px] rounded-[5px] py-[19px] pl-[74px] pr-[55px] ${
          isChecked
            ? "line-through dark:text-todo-light text-todo-dark"
            : "dark:text-todo-dark text-todo-light"
        }`}
      >
        {text}
        <div
          className={`content-[*] absolute top-[19px] left-[24px] w-[24px] h-24px border rounded-full border-solid after:content-link after:absolute after:top-[-2px] mobile:after:top-[2px] after:left-[6px] ${
            isChecked ? "after:opacity-100" : "after:opacity-0"
          } ${
            !isChecked && isHovered
              ? "border-transparent"
              : "border-border-light dark:border-border-dark"
          }`}
          style={{
            background:
              isHovered && !isChecked
                ? borderStyle[mode]
                : isChecked
                ? "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)) padding-box, linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)) border-box"
                : "",
          }}
        ></div>
        <div
          className={`${
            isHovered ? "opacity-100" : "opacity-0"
          }  absolute right-[24px] top-[22px]`}
        >
          <Image src={CrossIcon} alt="delete item" />
        </div>
      </label>
    </div>
  );
}

export default ListItem;