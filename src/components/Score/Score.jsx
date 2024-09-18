const Score = ({ score, total, restartGame }) => {
  return (
    <div>
      <h2>Your Score: {score} / {total}</h2>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
};

export default Score;
