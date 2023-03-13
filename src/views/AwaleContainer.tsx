import { useContext } from "react";
import Circle from "../components/Circle/Circle";
import Footer from "./Footer";
import Top from "./Top";
import { GameContext } from "../App";

function AwaleContainer() {
  const gameCore = useContext(GameContext);
  return (
    <main className="flex flex-col items-center">
      <Top />
      <ul className="list-none bg-[#421b00] lg:max-w-[800px] max-w-[350px] rounded-[1rem] lg:p-8 p-0 flex flex-wrap justify-center">
        {gameCore.awaleArray.map((seedNumber: number, index: number) => {
          return (
            <Circle
              key={index}
              seedNumber={seedNumber}
              clickHandler={() => seedNumber && gameCore.play(index)}
              index={index}
              player={gameCore.player}
            />
          );
        })}
      </ul>
      <Footer resetGame={gameCore.resetGame} />
    </main>
  );
}

export default AwaleContainer;
