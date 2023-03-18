import { useState } from "react";
import { timer } from "../utils/timer";
import { enlight, unenlight } from "../utils/ux-ui";
import GLOBALS from "../data/Globals";

function usePlay() {
  const initialAwaleArray = GLOBALS.INITIALAWALEARRAY;
  const [awaleArray, setAwaleArray] = useState([...initialAwaleArray]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(1);
  const [score, setScore] = useState([10, 0]);

  const play = async (index: number) => {
    //je bloque la partie pendant le déroulement de la fonction
    setIsPlaying(true);
    //si la partie est en cours, je ne fais rien
    if (isPlaying) return;
    //je stocke puis j'efface le nombre de graines dans la case cliquée
    let seedsNumber = awaleArray[index];
    const duringPlay = async () => {
      awaleArray[index] += 1;
      setAwaleArray([...awaleArray]);
      await unenlight();
      await enlight(index);
    };
    //si le joueur clique sur une case avec plus de 12 graines, je lui ajoute le reste de la division par 12 pour la règle des 12 graines.
    if (seedsNumber > 12) {
      seedsNumber += seedsNumber % 12;
    }
    awaleArray[index] = 0;
    //je boucle sur le nombre de graines de la case cliquée
    for (let i = 0; i < seedsNumber; i++) {
      //S'il y a plus de 12 graines, et que j'arrive de nouveau sur la 12eme case alors je saute à la case suivante
      if (i % 12 === 0) {
        awaleArray[index] = 0;
      }
      //je fais une pause de 300ms entre chaque graine
      i !== 0 && (await timer(300));
      //je place une graine dans la case suivante
      // si la case est la 12eme, je place la graine suivante  dans la 5em case
      if (index <= 5) {
        index !== 0 ? (index -= 1) : (index = 6);
        duringPlay();
        continue;
      }
      if (index > 5) {
        index !== 11 ? (index += 1) : (index = 5);
        duringPlay();
      }
    }
    await timer(300);
    await unenlight();
    whoIsPlaying();
    //je débloque la partie
    if (isPlayerIsInHisSide(index)) scoreCalculation(index);
    setIsPlaying(false);
  };

  // ajouter au score du joueur si 2 ou 3 graines dans la case puis reset à 0
  const scoreCalculation = (index: number): void => {
    if (awaleArray[index] === 2 || awaleArray[index] === 3) {
      isPlayerIsInHisSide(index) && player === 2
        ? setScore([score[0], (score[1] += awaleArray[index])])
        : setScore([(score[0] += awaleArray[index]), score[1]]);
      awaleArray[index] = 0;
      setAwaleArray([...awaleArray]);

      return scoreCalculation(
        index <= 5
          ? index === 5
            ? (index = 5)
            : index + 1
          : index === 0
          ? (index = 6)
          : index - 1
      );
    }
  };

  const isPlayerIsInHisSide = (index: number): boolean => {
    if (player === 1 && index <= 5) return true;
    if (player === 2 && index > 5) return true;
    return false;
  };

  const resetGame = () => {
    setAwaleArray([...initialAwaleArray]);
    setPlayer(1);
    setScore([0, 0]);
  };

  // Il faut « nourrir » l'adversaire, c'est-à-dire que, quand celui-ci n'a plus de graines, il faut absolument jouer un coup qui lui permette de rejouer ensuite.
  const noSeedsAvailableToPlay = (arr: number[]) => {
    return arr.every((item) => item === 0);
  };

  const whoIsPlaying = () => {
    if (noSeedsAvailableToPlay(awaleArray.slice(0, 6))) return setPlayer(1);
    if (noSeedsAvailableToPlay(awaleArray.slice(6))) return setPlayer(2);
    player === 1 ? setPlayer(2) : setPlayer(1);
  };

  const checkIfGameIsOver = () => {};

  return [awaleArray, play, resetGame, player, score] as const;
}
export default usePlay;
