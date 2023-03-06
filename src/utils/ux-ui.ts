export const enlight = (index: number) => {
    const circle = document.querySelectorAll("li");
    circle[index].classList.remove("bg-[sienna]");
    circle[index].classList.add("bg-[#f2e9e4]", "bg-[#f2e9e4]");
  };
    
  export const unenlight = () => {
    const circle = document.querySelectorAll("li");
    circle.forEach((element) => {
      element.classList.add("bg-[sienna]");
      element.classList.remove("bg-[#f2e9e4]", "text-[#421b00]");
    });
  };