type CircleProps = {
  seedNumber: number;
  index: number;
  clickHandler(index: number): void;
  player: number;
};
// pointer-events-none
function Circle({ seedNumber, clickHandler, index, player }: CircleProps) {
  return (
    <li
      className={`lg:w-[100px] lg:h-[100px] w-[82px] h-[82px] border-solid border-2 border-indigo-60 rounded-full m-[.2rem]  hover:bg-[#a3461b] cursor-pointer flex justify-center items-center transition duration-150 ease-out hover:ease-in hover:scale-[1.2]
      ${
        (player === 1 && [0, 1, 2, 3, 4, 5].includes(index)) ||
        (player === 2 && [6, 7, 8, 9, 10, 11].includes(index))
          ? "pointer-events-none bg-[sienna]"
          : "bg-[#a3461b]  animate-heartBeat"
      }  
       `}
      onClick={() => clickHandler(index)}
    >
      {seedNumber}
    </li>
  );
}

export default Circle;
