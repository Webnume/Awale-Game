import Circle from "../components/Circle/Circle";
import usePlay from "../hooks/usePlay";

function AwaleContainer() {
  const [awaleArray, play, resetGame, player, score] = usePlay();
  return (
    <>
      <h1>
        Score: <br /> <b>Player 1</b> {score[0]} - <b>Player 2</b> {score[1]}
      </h1>
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
      {
        <button
          className="bg-[#000000] text-[#f2e9e4] text-[1.5rem] font-bold rounded-[1rem] p-4 m-4"
          type="reset"
          onClick={() => resetGame()}
        >
          RESET
        </button>
      }
    </>
  );
}

export default AwaleContainer;
