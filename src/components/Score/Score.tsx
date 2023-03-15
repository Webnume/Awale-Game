type ScoreProps = {
  score: number[];
  player: number;
};

function Score({ score, player }: ScoreProps) {
  return (
    <>
      <div className={`flex flex-col rounded border-2 shadow-2xl`}>
        <span className="text-xl bg-slate-400 p-2">
          PLAYER {player === 1 ? "1" : "2"}
        </span>
        <h2 className="text-5xl">{player === 1 ? score[0] : score[1]}</h2>
      </div>
      {/* {score[0] > score[1] && <h1>Player 1 wins</h1>} */}
    </>
  );
}

export default Score;
