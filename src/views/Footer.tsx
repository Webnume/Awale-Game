import GLOBALS from "../data/Globals";

type FooterProps = {
  resetGame: () => void;
};
function Footer({ resetGame }: FooterProps) {
  return (
    <footer className=" items-center flex justify-evenly flex-col lg:mt-8">
      {
        <button
          className="bg-[#421b00] text-[#f2e9e4] lg:text-[1.5rem] font-bold rounded-[1rem] lg:p-4 m-1 max-w-[10rem]"
          type="reset"
          onClick={() => resetGame()}
        >
          RESET
        </button>
      }
      <section className="flex justify-evenly w-full flex-col">
        {GLOBALS.OUTLINKS.map((outlink) => (
          <a key={outlink.title} target="_blank" href={outlink.links}>
            {outlink.title}
          </a>
        ))}
      </section>
    </footer>
  );
}

export default Footer;
