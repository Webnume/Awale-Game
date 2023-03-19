type whoseTurnProps = {
  player: number;
};

function whoseTurn({ player }: whoseTurnProps) {
  return (
    <section className={`max-lg:absolute max-lg:top-[44%] max-lg:left-[38%] max-lg:text-white animate-heartBeat font-bold lg:text-xl max-lg:bg-brown w-100`}>
      Player {player} turn
    </section>
  );
}

export default whoseTurn;
