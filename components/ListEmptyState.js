import React from "react";

import { useInputRef } from "@/lib/InputFocusContext";

function ListEmptyState(props) {
  const { focusInput } = useInputRef();

  return (
    <div className="relative w-full dark:bg-mode-dark bg-mode-light rounded-[5px] border-b border-border-light dark:border-border-dark py-14 px-[24px]">
      <h1 className="text-center">
        You have no to-do items yet{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </h1>
      <div className="flex justify-center mt-3">
        <button
          onClick={focusInput}
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-indigo-500 w-fit flex items-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="mt-1">Add and item to your list</span>
        </button>
      </div>
    </div>
  );
}

export default ListEmptyState;
