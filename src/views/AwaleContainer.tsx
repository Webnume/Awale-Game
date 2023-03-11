import Circle from "../components/Circle/Circle";
import usePlay from "../hooks/usePlay";
import Footer from "./Footer";
import Score from "./score";

function AwaleContainer() {
  const [awaleArray, play, resetGame, player, score] = usePlay();

  return (
    <main className="flex flex-col">
      <h1 className="lg:text-9xl text-2xl">AWALE</h1>
      <Score score={score} player={player} />
      <ul className="list-none bg-[#421b00] lg:max-w-[800px] max-w-[350px] rounded-[1rem] lg:p-8 p-0 flex flex-wrap justify-center">
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
