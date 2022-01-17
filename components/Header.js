import React, { Fragment, useRef } from "react";
import Image from "next/image";

import { Menu, Transition } from "@headlessui/react";

import SunIcon from "../public/images/icon-sun.svg";
import MoonIcon from "../public/images/icon-moon.svg";

import { useMode, useSetMode } from "@/lib/ModeContext";
import { useAuth } from "@/lib/auth";
import { useInputRef } from "@/lib/InputFocusContext";

import { createTodoItem } from "@/lib/db";

function Header(props) {
  const mode = useMode();
  const toggleMode = useSetMode();
  const auth = useAuth();
  const { inputRef } = useInputRef();

  const storeTodoItem = async (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      const newItem = {
        authorId: auth.user.uid,
        createdAt: new Date().toISOString(),
        text: inputRef.current.value,
        checked: false,
      };
      let result = await createTodoItem(newItem);
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <div className="flex justify-between items-center mb-50px mobile:mb-[32px]">
        <h1 className="m-0 text-white text-30px mobile:text-[20px] tracking-[18px] font-bold">
          TODO
        </h1>
        <div className="flex items-center gap-1">
          <Image
            src={mode === "light" ? SunIcon : MoonIcon}
            alt="mode icon"
            layout="intrinsic"
            className="cursor-pointer"
            id="modeIcon"
            onClick={toggleMode}
          />
          {auth.user ? (
            <Menu as="div" className="ml-3 relative z-20">
              <div>
                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
                  <span className="sr-only">Open user menu</span>
                  <Image
                    src={auth.user.photoUrl}
                    alt="avatar"
                    width={30}
                    height={30}
                    className="rounded-full drop-shadow-2xl"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          "block px-4 py-2 text-sm text-gray-700 font-bold border-b"
                        }
                      >
                        {auth.user.name}
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={"block px-4 py-2 text-sm text-gray-700"}
                      >
                        <button onClick={() => auth.signout()}>Logout</button>
                      </a>
                    )}
                  </Menu.Item>
                  {/* <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={"block px-4 py-2 text-sm text-gray-700"}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item> */}
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <button onClick={() => auth.signinWithGoogle()}>
              Sign in with Google
            </button>
          )}
        </div>
      </div>
      <div className="mb-25px add-item-section">
        <form id="addTodoItem" onSubmit={storeTodoItem}>
          <div className="relative w-full dark:bg-mode-dark bg-mode-light rounded-[5px]">
            <div className="absolute border border-border-light dark:border-border-light rounded-full w-24px h-24px top-[19px] left-[24px] content-none"></div>
            <input
              className="relative text-[18px] placeholder:text-[18px] mobile:text-[14px] mobile:placeholder:text-[14px] py-22px pl-74px	focus:border-0 hover:border-0 focus:outline-0 hover:outline-0 w-full dark:text-todo-dark text-todo-light border-0 bg-transparent caret-todoBlue"
              type="text"
              name="addNewItem"
              placeholder="Create a new todo..."
              ref={inputRef}
            />
          </div>
        </form>
        {/* <button onClick={focusInput}>Click</button> */}
      </div>
    </>
  );
}

export default Header;
