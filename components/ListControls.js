import React from "react";
function FilterButton({ children, ...props }) {
  return (
    <span
      {...props}
      className="mobile:relative mobile:text-[14px] dark:hover:text-controls-hover-dark hover:text-controls-hover-light focus:text-controls-blue font-bold"
    >
      {children}
    </span>
  );
}
function ListControls(props) {
  return (
    <div className="relative flex justify-between items-center px-[25px] py-[18px] rounded-b-[5px] dark:bg-mode-dark bg-mode-light">
      <div className="dark:text-controls-dark text-controls-light">
        <span className="mobile:text-[14px]">{props.count} items</span>
      </div>
      <div className="cursor-pointer dark:text-controls-dark text-controls-light flex gap-[18px] mobile:absolute mobile:top-[52px] mobile:w-full mobile:mt-[15px] mobile:left-[0] mobile:flex mobile:justify-center mobile:py-[18px] mobile:px-[10px] mobile:rounded-[5px] dark:mobile:bg-mode-dark mobile:bg-mode-light">
        <FilterButton>All</FilterButton>
        <FilterButton>Active</FilterButton>
        <FilterButton>Completed</FilterButton>
      </div>
      <div className="cursor-pointer dark:text-controls-dark text-controls-light">
        <span className="mobile:text-[14px] dark:hover:text-controls-hover-dark hover:text-controls-hover-light focus:text-controls-blue">
          Clear Completed
        </span>
      </div>
    </div>
  );
}

export default ListControls;
