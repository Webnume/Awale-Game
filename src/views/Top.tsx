import Score from "./score";
import { useContext, useState } from "react";
import { GameContext } from "../App";
import useWindowSize from "../hooks/useWindowSize";

function Top() {
  const gameCore = useContext(GameContext);
  const [open, setOpen] = useState(false);
  const size = useWindowSize();

  return (
    <div>
      <button className="lg:invisible" onClick={() => setOpen(!open)}>
        MENU
      </button>
      {open && size.width>1024 && (
       <>
          <h1 className="lg:text-9xl text-2xl">AWALE</h1>
          <Score score={gameCore.score} player={gameCore.player} />
        </>
      )}
    </div>
  );
}

export default Top;
