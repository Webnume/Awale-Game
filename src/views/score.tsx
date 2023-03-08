import usePlay from "../hooks/usePlay";

type ScoreProps = {
    score: number[];
    player: number;
}

function Score({score, player}: ScoreProps) {

  return (
    <>
      Score:
      <p>
        <b>Player 1</b> {score[0]} - <b>Player 2</b> {score[1]}
      </p>      
      Player {player} turn
      {/* {score[0] > score[1] && <h1>Player 1 wins</h1>} */}
    </>
  );
}

export default Score;
