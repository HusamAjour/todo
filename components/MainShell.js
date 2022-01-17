import React from "react";

function MainShell(props) {
  return (
    <main className="dark:bg-body-dark bg-body-light relative py-80px px-0 min-h-screen mobile:pt-[37px]">
      <div className="absolute w-full h-300px mobile:h-[200px] dark:bg-desktop-dark mobile:dark:bg-mobile-dark bg-desktop-light mobile:bg-mobile-light top-0 bg-cover"></div>
      <div className="relative">{props.children}</div>
    </main>
  );
}

export default MainShell;
