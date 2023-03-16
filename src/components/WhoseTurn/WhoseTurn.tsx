type whoseTurnProps = {
  player: number;
};

function whoseTurn({ player }: whoseTurnProps) {
  return(
  <section className="max-lg:absolute max-lg:top-[44%] max-lg:left-[38%] max-lg:text-white max-lg:w-[90px]">
    Player {player} turn
  </section>);
}

export default whoseTurn;
