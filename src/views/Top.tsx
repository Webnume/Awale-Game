import { useContext } from "react";
import { GameContext } from "../App";
import Score from "../components/Score/Score";

function Top() {
  const gameCore = useContext(GameContext);

  return (
    <header className="lg:mb-8 static">
      <section className="flex justify-evenly items-center">
        <Score score={gameCore.score} player={2} />
        <h1 className="lg:text-8xl text-2xl text-[#421b00]">AWALE</h1>
        <Score score={gameCore.score} player={1} />
      </section>
    </header>
  );
}

export default Top;
