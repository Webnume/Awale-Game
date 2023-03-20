import { timer } from "./timer";

export const enlight = (index: number) => {
  const circle = document.querySelectorAll("li");
  circle[index].classList.remove("bg-sienna");
  circle[index].classList.add("bg-white");
};

export const unenlight = () => {
  const circle = document.querySelectorAll("li");
  circle.forEach((element) => {
    element.classList.add("bg-sienna");
    element.classList.remove("bg-white", `text-brown`, "bg-success");
  });
};

export const winLight = async (index: number) => {
  const circle = document.querySelectorAll("li");
  circle[index].classList.remove("bg-sienna");
  await timer(300)
  circle[index].classList.add("bg-success");
};

export const unWinLight = async (index: number) => {
  const circle = document.querySelectorAll("li");
  circle[index].classList.remove("bg-sienna");
  circle[index].classList.remove("bg-success");
};
