import { useContext } from "react";
import Circle from "../../components/Circle/Circle";
import { GameContext } from "../../App";

function PlayerSide({ player }: { player: number }) {
  const gameCore = useContext(GameContext);
  const player1Index = [0, 1, 2, 3, 4, 5];
  const player2Index = [6, 7, 8, 9, 10, 11];
  const playerIndex = player === 1 ? player1Index : player2Index;

  return (
    <ul
      className={`list-none bg-[#421b00] lg:w-[800px] min-w-[50%] rounded-[1rem] lg:p-8 p-0 flex flex-wrap justify-center flex-col-reverse lg:flex-row items-center`}
    >
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
