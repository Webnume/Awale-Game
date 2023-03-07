import Circle from "../components/Circle/Circle";
import usePlay from "../hooks/usePlay";

function AwaleContainer() {
  const [awaleArray, play, resetGame, player, score] = usePlay();
  return (
    <main className="flex flex-col">
      <h1 className="text-9xl">AWALE</h1>
      Score:
      <p>
        <b>Player 1</b> {score[0]} - <b>Player 2</b> {score[1]}
      </p>
      {/* {score[0] > score[1] && <h1>Player 1 wins</h1>} */}
      Player {player} turn
      <ul className="list-none bg-[#421b00] w-[800px] rounded-[1rem] p-8 flex flex-wrap">
        {awaleArray?.map((number: number, index: number) => {
          return (
            <Circle
              key={index}
              seedNumber={number}
              clickHandler={() => play(index)}
              index={index}
            />
          );
        })}
      </ul>
      <footer className=" items-center flex justify-evenly">
        {
          <button
            className="bg-[#000000] text-[#f2e9e4] text-[1.5rem] font-bold rounded-[1rem] p-4 m-4 max-w-[10rem]"
            type="reset"
            onClick={() => resetGame()}
          >
            RESET
          </button>
        }
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=atg9dZq2q0c&ab_channel=Videoregles.Net"
        >
          Les règles sur YouTube
        </a>
        <a target="_blank" href="https://fr.wikipedia.org/wiki/Awal%C3%A9">
          Les règles sur WikiPedia
        </a>
      </footer>
    </main>
  );
}

export default AwaleContainer;
