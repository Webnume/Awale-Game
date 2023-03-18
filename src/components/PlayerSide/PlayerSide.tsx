import { useContext } from "react";
import Circle from "../../components/Circle/Circle";
import { GameContext } from "../../App";

function PlayerSide({ player }: { player: number }) {
  const gameCore = useContext(GameContext);
  const player1Index = [6, 7, 8, 9, 10, 11];
  const player2Index = [0, 1, 2, 3, 4, 5];
  const playerIndex = player === 1 ? player1Index : player2Index;

  return (
    <ul
      className={`list-none bg-[#421b00] min-w-[50%] rounded-[1rem] lg:p-8 p-0 flex flex-wrap justify-center flex-col-reverse lg:flex-row items-center`}
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
