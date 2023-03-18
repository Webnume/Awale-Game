import { useContext } from "react";
import { GameContext } from "../App";
import PlayerSide from "../components/PlayerSide/PlayerSide";
import WhoseTurn from "../components/WhoseTurn/WhoseTurn";

function AwaleContainer() {
  const gameCore = useContext(GameContext);
  return (
    <main className="relative flex lg:flex-col items-center min-w-[360px]">
      <PlayerSide player={1} />
      <WhoseTurn player={gameCore.player} />
      <PlayerSide player={2} />
    </main>
  );
}

export default AwaleContainer;
