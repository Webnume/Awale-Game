import Circle from "../components/Circle/Circle";
import usePlay from "../hooks/usePlay";
import Footer from "./Footer";
import Score from "./score";

function AwaleContainer() {
  const [awaleArray, play, resetGame, player, score] = usePlay();

  return (
    <main className="flex flex-col">
      <h1 className="text-9xl">AWALE</h1>
      <Score score={score} player={player} />
      <ul className="list-none bg-[#421b00] w-[800px] rounded-[1rem] p-8 flex flex-wrap">
        {awaleArray?.map((seedNumber: number, index: number) => {
          return (
            <Circle
              key={index}
              seedNumber={seedNumber}
              clickHandler={() => seedNumber && play(index)}
              index={index}
              player={player}
            />
          );
        })}
      </ul>
      <Footer resetGame={resetGame} />
    </main>
  );
}

export default AwaleContainer;
