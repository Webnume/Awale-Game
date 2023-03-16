type FooterProps = {
  resetGame: () => void;
};
function Footer({ resetGame }: FooterProps) {
  return (
    <footer className=" items-center flex justify-evenly flex-col lg:mt-8">
      {
        <button
          className="bg-[#421b00] text-[#f2e9e4] lg:text-[1.5rem] font-bold rounded-[1rem] lg:p-4 m-3 max-w-[10rem]"
          type="reset"
          onClick={() => resetGame()}
        >
          RESET
        </button>
      }
      <section className="flex justify-evenly w-full flex-col">
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=atg9dZq2q0c&ab_channel=Videoregles.Net"
        >
          Les règles sur YouTube (Côte d'ivoire)
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=HunzMxlbghQ&ab_channel=FirstStepTours"
        >
          Les règles sur YouTube (Ghana/ Togo)
        </a>
        <a target="_blank" href="https://fr.wikipedia.org/wiki/Awal%C3%A9">
          Les règles sur WikiPedia
        </a>
        <a target="_blank" href="https://awale-game.vercel.app/">
          Online Vercel
        </a>
      </section>
    </footer>
  );
}

export default Footer;
