import React, { useRef, useState } from "react";
import Circle from "../components/Circle/Circle";
import usePlay from "../utils/mooves";

function AwaleContainer() {
  const [awaleArray, play] = usePlay(0);
  return (
    <ul className="list-none bg-[#421b00] w-[800px] rounded-[1rem] p-8 flex flex-wrap">
      {awaleArray.map((number: number, index: number) => {
        return (
          <Circle
            key={index}
            seedNumber={number}
            clickHandler={() => play(index)}
            index={index}
          />
        );
      })}
      {
        <button
          className="bg-[#000000] text-[#f2e9e4] text-[1.5rem] font-bold rounded-[1rem] p-4 m-4"
          type="reset"
          // onClick={() => setAwaleArray([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4])}
        >
          RESET
        </button>
      }
    </ul>
  );
}

export default AwaleContainer;
