import { useContext } from "react";
import { GameContext } from "../App";
import PlayerSide from "../components/PlayerSide/PlayerSide";
import WhoseTurn from "../components/WhoseTurn/WhoseTurn";

function AwaleContainer() {
  const gameCore = useContext(GameContext);
  return (
    <main className="flex lg:flex-col items-center min-w-[360px]">
      <PlayerSide player={2} />
      <WhoseTurn player={gameCore.player} />
      <PlayerSide player={1} />
    </main>
  );
}

export default AwaleContainer;
