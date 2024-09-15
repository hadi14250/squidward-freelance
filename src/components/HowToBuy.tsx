import React from "react";

const HowToBuy = ({ children, title, id }) => {
  return (
    <div
      id={id}
      className="flex flex-col items-center max-w-[1500px] px-7 lg:px-20 gap-8"
    >
      <h1 className="text-[60px]">{title}</h1>
      {children}
    </div>
  );
};

export default HowToBuy;
