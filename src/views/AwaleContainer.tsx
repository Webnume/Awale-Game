import { useContext } from "react";
import { GameContext } from "../App";
import PlayerSide from "../components/PlayerSide/PlayerSide";

function AwaleContainer() {
  // const gameCore = useContext(GameContext);
  return (
    <main className="flex lg:flex-col items-center min-w-[360px]">
      <PlayerSide player={1} />
      <PlayerSide player={2} />
    </main>
  );
}

export default AwaleContainer;
