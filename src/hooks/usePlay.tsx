import { useState } from "react";
import { timer } from "../utils/timer";
import { enlight, unenlight } from "../utils/ux-ui";

function usePlay() {
  const initialAwaleArray = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
  const [awaleArray, setAwaleArray] = useState(initialAwaleArray);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(1);
  const [score, setScore] = useState([0, 0]);

  const play = async (index: number) => {
    //je bloque la partie
    setIsPlaying(true);
    //si la partie est en cours, je ne fais rien
    if (isPlaying) return;
    //je stocke puis j'efface le nombre de graines dans la case cliquée
    const seedsNumber = awaleArray[index];
    awaleArray[index] = 0;
    //je boucle sur le nombre de graines de la case cliquée
    for (let i = 0; i < seedsNumber; i++) {
      //je fais une pause de 300ms entre chaque graine
      i !== 0 && (await timer(300));
      //je place une graine dans la case suivante
      // si la case est la 12eme, je place la graine suivante  dans la 1ere case
      if (index <= 5) {
        index !== 0 ? (index -= 1) : (index = 6);
        awaleArray[index] += 1;
        setAwaleArray([...awaleArray]);
        console.log("active: " + index);
        await unenlight();
        await enlight(index);
        continue;
      }
      if (index > 5) {
        index !== 11 ? (index += 1) : (index = 5);
        awaleArray[index] += 1;
        setAwaleArray([...awaleArray]);
        console.log("active: " + index);
        await unenlight();
        await enlight(index);
      }
    }
    //je débloque la partie
    setIsPlaying(false);
    scoreCalculaion();
    await timer(300);
    await unenlight();
    whoIsPlaying();
  };

  const resetGame = async () => {
    setAwaleArray(initialAwaleArray);
    setPlayer(1);
    await unenlight();
    scoreCalculaion();
  };

  const whoIsPlaying = () => {
    if (player === 1) {
      setPlayer(2);
    } else {
      setPlayer(1);
    }
  };

  const scoreCalculaion = () => {
    const scorePlayer1 = awaleArray.slice(6, 12).reduce((a, b) => {
      if (b === 2 || b === 3) a + b;
      console.log(a, b);
      return a;
    }, 0);
    const scorePlayer2 = awaleArray.slice(0, 6).reduce((a, b) => a + b, 0);
    setScore([scorePlayer1, scorePlayer2]);
  };

  const checkIfGameIsOver = () => {};

  return [awaleArray, play, resetGame, player, score];
}
export default usePlay;
