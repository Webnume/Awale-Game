import { useState } from "react";
import { timer } from "../utils/timer";
import { enlight, unenlight } from "../utils/ux-ui";

function usePlay() {
  const initialAwaleArray = [3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2];
  const [awaleArray, setAwaleArray] = useState(initialAwaleArray);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(1);
  const [score, setScore] = useState([0, 0]);

  const play = async (index: number) => {
    //je bloque la partie pendant le déroulement de la fonction
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
    // scoreCalculation(seedsNumber, index);
    await timer(300);
    await unenlight();
    scoreCalculation(index);
    whoIsPlaying();
    //je débloque la partie
    setIsPlaying(false);
  };

  // ajouter au score du joueur si 2 ou 3 graines dans la case puis reset à 0
  const scoreCalculation = (index:number): void => {
    if (awaleArray[index] === 2 || awaleArray[index] === 3) {
      index <= 5 && player === 2
        ? setScore([score[0], score[1] + awaleArray[index]])
        : setScore([score[0] + awaleArray[index], score[1]]);
      awaleArray[index] = 0;
      setAwaleArray([...awaleArray]);
      return scoreCalculation(index > 5 ? index - 1 : index + 1);
    }
  };

  const resetGame = async () => {
    setAwaleArray(initialAwaleArray);
    setPlayer(1);
    await unenlight();
    setScore([0, 0]);
  };

  const whoIsPlaying = () => {
    if (player === 1) {
      setPlayer(2);
    } else {
      setPlayer(1);
    }
  };

  const checkIfGameIsOver = () => {};

  return [awaleArray, play, resetGame, player, score] as const;
}
export default usePlay;
