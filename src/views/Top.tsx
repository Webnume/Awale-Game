// import Score from "./score";
import { useContext, useState } from "react";
import { GameContext } from "../App";
import Score from "../components/Score/Score";
import WhoseTurn from "../components/WhoseTurn/WhoseTurn";

function Top() {
  const gameCore = useContext(GameContext);

  return (
    <header className="lg:mb-8 static">
        <section className="flex justify-around items-center">
          <Score score={gameCore.score} player={2} />
          <h1 className="lg:text-8xl text-2xl">AWALE</h1>
          <Score score={gameCore.score} player={1} />
        </section>
        <WhoseTurn player={gameCore.player} />
    </header>
  );
}

export default Top;
