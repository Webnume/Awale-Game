type ScoreProps = {
  score: number[];
  player: number;
};

function Score({ score, player }: ScoreProps) {
  return (
    <>
      <div
        className={`flex lg:flex-col rounded lg:border-2 shadow-2xl items-center mb-[.3rem]`}
      >
        <span className="lg:text-xl bg-[#421b00] text-white lg:p-2 p-1">
          PLAYER {player === 1 ? "1" : "2"}
        </span>
        <h2 className="lg:text-5xl p-1">
          {player === 1 ? score[0] : score[1]}
        </h2>
      </div>
      {/* {score[0] > score[1] && <h1>Player 1 wins</h1>} */}
    </>
  );
}

export default Score;
