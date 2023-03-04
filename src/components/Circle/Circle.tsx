import React from "react";

type CircleProps = {
  seedNumber: number;
  index: number;
  clickHandler(index: number): void;
  isActive: boolean;
};

function Circle({ seedNumber, clickHandler, index, isActive }: CircleProps) {
  return (
    <li
      className={`w-[100px] h-[100px] border-solid border-2 border-indigo-60 rounded-full m-[.7rem] bg-[sienna] cursor-pointer flex justify-center items-center transition duration-150 ease-out hover:ease-in hover:scale-[1.2] ${
        isActive ? "bg-[#f2e9e4] text-[#421b00]" : ""
      }`}
      onClick={() => clickHandler(index)}
    >
      {seedNumber}
      {isActive && <div className="bg-[#421b00] w-[50px] h-[50px] rounded-full" />}
    </li>
  );
}

export default Circle;
