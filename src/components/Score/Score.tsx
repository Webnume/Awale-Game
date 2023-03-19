type ScoreProps = {
  score: number[];
  player: number;
};

function Score({ score, player }: ScoreProps) {
  const winner = score[0] > score[1] ? 1 : 2;
  return (
    <>
      <div
        className={`relative flex lg:flex-col ${
          player === 2 && "max-lg:flex-row-reverse"
        } ${
          player === winner && score[0] !== score[1] ? "border-gold" : ""
        } rounded border-2 shadow-2xl items-center`}
      >
        {player === winner &&
        score[0] !== score[1] &&
        (score[0] > 24 || score[1] > 24) ? (
          <i className="fa-solid fa-crown fa-2xl  fa-shake text-gold absolute -top-1 "></i>
        ) : (
          ""
        )}
        <span
          className={`lg:text-xl ${
            player === winner && score[0] !== score[1]
              ? "bg-gold  border-gold"
              : "bg-brown text-white"
          }  lg:p-2 p-1`}
        >
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
