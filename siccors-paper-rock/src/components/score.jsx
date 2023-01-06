import logo from "./images/logo.svg"

const Score = ({ total }) => {
  return (
    <div className="score-board">
      <img src={logo} alt="siccors, paper, rock logo"/>
        <div className="score">
          <span>Your score:</span>
          {total}
        </div>
    </div>
    );
}

export default Score;
