import { createContext } from "react";
import "./App.css";
import AwaleContainer from "./views/AwaleContainer";
import usePlay from "./hooks/usePlay";
import Footer from "./views/Footer";
import Top from "./views/Top";

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
        <Top />
        <AwaleContainer />
        <Footer resetGame={resetGame} />
      </div>
    </GameContext.Provider>
  );
}

export default App;
