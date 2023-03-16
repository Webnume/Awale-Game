// import Score from "./score";
import { useContext, useState } from "react";
import { GameContext } from "../App";
import useWindowSize from "../hooks/useWindowSize";
import Score from "../components/Score/Score";
import WhoseTurn from "../components/WhoseTurn/WhoseTurn";

function Top() {
  const gameCore = useContext(GameContext);
  const [open, setOpen] = useState(false);
  const size = useWindowSize();

  return (
    <header className="lg:mb-8 static">
      {
        <button
          className="lg:invisible rounded-b bg-amber-400 absolute top-0 right-0 p-2"
          onClick={() => setOpen(!open)}
        >
          MENU
        </button>
      }
      {(size.width > 1024 || open) && (
        <>
          <section className="flex justify-around items-center">
            <Score score={gameCore.score} player={2} />
            <h1 className="lg:text-8xl text-2xl">AWALE</h1>
            <Score score={gameCore.score} player={1} />
          </section>
          <WhoseTurn player={gameCore.player} />
        </>
      )}
    </header>
  );
}

export default Top;
