export default function Slot({ options }) {
  const getRandomOption = () =>
    options[Math.floor(Math.random() * options.length)];

  const option1 = getRandomOption();
  const option2 = getRandomOption();
  const option3 = getRandomOption();

  const isWinner = option1 === option2 && option1 === option3;
  return (
    <div>
      <h1 style={{color : isWinner? 'green' : 'red'}}>{isWinner ? "You Win" : "You Lose"}</h1>
      <h1>{option1}{option2}{option3}</h1>
      {isWinner && <p>Congratulations!</p>}
    </div>
  );
}
