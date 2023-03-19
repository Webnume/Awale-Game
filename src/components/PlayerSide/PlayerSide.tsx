import { useContext } from "react";
import Circle from "../../components/Circle/Circle";
import { GameContext } from "../../App";
import GLOBALS from "../../utils/Globals";

function PlayerSide({ player }: { player: number }) {
  const gameCore = useContext(GameContext);
  const player1Index = GLOBALS.PLAYER1SIDE;
  const player2Index = GLOBALS.PLAYER2SIDE;
  const playerIndex = player === 1 ? player1Index : player2Index;

  return (
    <ul
      className={`list-none bg-brown min-w-[50%] rounded-[1rem] lg:p-8 p-0 flex flex-wrap justify-center flex-col-reverse lg:flex-row items-center border-2`}
    >
      {
        <span className="text-white lg:text-xl max-lg:invisible">
          Player {player}
        </span>
      }
      {gameCore.awaleArray.map((seedNumber: number, index: number) => {
        if (playerIndex.includes(index)) {
          return (
            <Circle
              key={index}
              seedNumber={seedNumber}
              clickHandler={() => seedNumber && gameCore.play(index)}
              index={index}
              player={gameCore.player}
            />
          );
        }
      })}
    </ul>
  );
}

export default PlayerSide;
