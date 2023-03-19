import GLOBALS from "./Globals";

export const enlight = (index: number) => {
  const circle = document.querySelectorAll("li");
  circle[index].classList.remove("bg-sienna");
  circle[index].classList.add("bg-white");
};

export const unenlight = () => {
  const circle = document.querySelectorAll("li");
  circle.forEach((element) => {
    element.classList.add("bg-sienna");
    element.classList.remove("bg-white", `text-brown`);
  });
};
