import GLOBALS from "../data/Globals";

type FooterProps = {
  resetGame: () => void;
};
function Footer({ resetGame }: FooterProps) {
  return (
    <footer className=" items-center flex justify-evenly flex-col lg:mt-8">
      {
        <section>
          <button
            className={`bg-brown text-white lg:text-[1.2rem] font-bold rounded-[1rem] lg:p-3 m-1 `}
            type="reset"
            onClick={() => resetGame()}
          >
            CONTINUE
          </button>

          <button
            className={`bg-brown text-white lg:text-[1.2rem] font-bold rounded-[1rem] lg:p-3 m-1 `}
            type="reset"
            onClick={() => resetGame()}
          >
            RESET
          </button>
        </section>
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
