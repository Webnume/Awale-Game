type whoseTurnProps = {
  player: number;
};

function whoseTurn({ player }: whoseTurnProps) {
  return <>Player {player} turn</>;
}

export default whoseTurn;
