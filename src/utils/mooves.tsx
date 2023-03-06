import React, { useRef, useState } from "react";

const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

const enlight = (index: number) => {
  const circle = document.querySelectorAll("li");
  circle[index].classList.remove("bg-[sienna]");
  circle[index].classList.add("bg-[#f2e9e4]", "bg-[#f2e9e4]");
};

const unenlight = () => {
  const circle = document.querySelectorAll("li");
  circle.forEach((element) => {
    element.classList.add("bg-[sienna]");
    element.classList.remove("bg-[#f2e9e4]", "text-[#421b00]");
  });
};

function usePlay(index: number) {
  const initialAwaleArray = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
  const [awaleArray, setAwaleArray] = useState(initialAwaleArray);
  const play = async (index: number) => {
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
  };
  return [awaleArray, play];
}
export default usePlay;
