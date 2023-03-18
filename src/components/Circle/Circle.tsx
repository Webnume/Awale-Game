import GLOBALS from "../../data/Globals";

type CircleProps = {
  seedNumber: number;
  index: number;
  clickHandler(index: number): void;
  player: number;
};

function Circle({ seedNumber, clickHandler, index, player }: CircleProps) {
  return (
    <li
      className={`lg:w-[100px] lg:h-[100px] w-[82px] h-[82px] border-solid border-2 border-white rounded-full m-[.2rem]  hover:bg-white cursor-pointer flex justify-center items-center transition duration-150 ease-out hover:ease-in
      ${
        (player === 1 && GLOBALS.PLAYER2SIDE.includes(index)) ||
        (player === 2 && GLOBALS.PLAYER1SIDE.includes(index))
          ? "pointer-events-none bg-sienna"
          : "bg-active  animate-heartBeat"
      }  
       `}
      onClick={() => clickHandler(index)}
    >
      {seedNumber}
    </li>
  );
}

export default Circle;
