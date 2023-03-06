import React from "react";

type CircleProps = {
  seedNumber: number;
  index: number;
  clickHandler(index: number): void;
};

function Circle({ seedNumber, clickHandler, index }: CircleProps) {
  return (
    <li
      className={`w-[100px] h-[100px] border-solid border-2 border-indigo-60 rounded-full m-[.7rem] bg-[sienna] hover:bg-[#a3461b] cursor-pointer flex justify-center items-center transition duration-150 ease-out hover:ease-in hover:scale-[1.2]`}
      onClick={() => clickHandler(index)}
    >
      {seedNumber}
    </li>
  );
}

export default Circle;
