import { createContext } from "react";
import "./App.css";
import AwaleContainer from "./views/AwaleContainer";
import usePlay from "./hooks/usePlay";

interface GameContextType {
  awaleArray: number[];
  play: (index: number) => void;
  resetGame: () => void;
  player: number;
  score: number[];
}
export const GameContext = createContext({} as GameContextType);

function App() {
  const [awaleArray, play, resetGame, player, score] = usePlay();
  return (
    <GameContext.Provider
      value={{ awaleArray, play, resetGame, player, score }}
    >
      <div className="App">
        <AwaleContainer />
      </div>
    </GameContext.Provider>
  );
}

export default App;
