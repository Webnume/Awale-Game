import React, { useRef, useState } from "react";
import Circle from "../components/Circle/Circle";

function AwaleContainer() {
  const [awaleArray, setAwaleArray] = useState([
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  ]);
  const [isActive, setIsActive] = useState(false);
  const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

  // const activeCircleRef = useRef();
  // const enlightCircle = (index: number) => {
  // activeCircleRef.current.style.backgroundColor = "#f2e9e4";
  // };

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
      // element.classList.remove("animate-spin");
    });
  };

  const play = async (index: number) => {
    //je stocke puis j'efface le nombre de graines dans la case cliquée
    const seedsNumber = awaleArray[index];
    awaleArray[index] = 0;
    if (index) setIsActive(false);
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
        setIsActive(true);
        // enlightCircle(index);
        // unenlight();
        // enlight(index);
        continue;
      }
      if (index > 5) {
        index !== 11 ? (index += 1) : (index = 5);
        awaleArray[index] += 1;
        setAwaleArray([...awaleArray]);
        console.log("active: " + index);
        setIsActive(true);
        // enlightCircle(index);
        // unenlight();
        // enlight(index);
      }
    }
  };

  return (
    <ul className="list-none bg-[#421b00] w-[800px] rounded-[1rem] p-8 flex flex-wrap">
      {awaleArray.map((number, index) => {
        return (
          <Circle
            // ref={activeCircleRef}
            key={index}
            seedNumber={number}
            clickHandler={() => play(index)}
            index={index}
            isActive={isActive}
          />
        );
      })}
      {
        <button
          className="bg-[#000000] text-[#f2e9e4] text-[1.5rem] font-bold rounded-[1rem] p-4 m-4"
          type="reset"
          onClick={() => setAwaleArray([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4])}
        >
          RESET
        </button>
      }
    </ul>
  );
}

export default AwaleContainer;
