import React from "react";

function ListItemSkeleton(props) {
  return (
    <>
      <div
        // onMouseEnter={() => toggleHovered(true)}
        // onMouseLeave={() => toggleHovered(false)}
        className="relative w-full dark:bg-mode-dark bg-mode-light first:rounded-t-[5px] border-b border-border-light dark:border-border-dark"
      >
        <div className="flex items-center relative rounded-[5px] py-[19px] pl-[24px] pr-[55px] animate-pulse">
          <div className="rounded-full dark:bg-border-dark bg-border-light h-[24px] w-[24px]"></div>
          <div className="flex flex-col	w-full flex-1 space-y-1 pl-[28px]">
            <div className="h-2 dark:bg-border-dark bg-border-light rounded w-full"></div>
            <div className="h-2 dark:bg-border-dark bg-border-light rounded w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItemSkeleton;
