import GLOBALS from "../utils/Globals";

type FooterProps = {
  resetGame: () => void;
  score: number[];
};
function Footer({ resetGame, score }: FooterProps) {
  return (
    <footer className=" items-center flex justify-evenly flex-col lg:mt-8">
      {
        <section>
          { (score[0] > 24 || score[1] > 24) &&
            <p>
              <i className="fa-solid fa-crown fa-2xl text-gold"></i>
              PLAYER {score[0] > 24 ? 1 : 2} WINS THE GAME
            </p>
          }

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
