import paper from "./images/paper.svg"
import scissors from "./images/scissors.svg"
import rock from "./images/rock.svg"
import Button from './button';

const Outcome = ({hand, compChoice, onClick}) => {

  const score = (you, computer) => {
    if (you === computer ) {
      return "It's a draw."
    } else if (you === 'rock') {
      if (computer === 'paper') {
        return "Shame, you lose."
      } else {
        return "Congrats, you win!"
      }
    } else if (you === 'paper') {
      if (computer === 'scissors') {
        return "Shame, you lose."
      } else {
        return "Congrats, you win!"
      }
    } else {
      if (computer === 'rock') {
        return "Shame, you lose."
      } else {
        return "Congrats, you win!"
      }
    }
  }

  const message = score(hand, compChoice);

  return (
    <div>
      <h2> {message} </h2>
      <h3>Your pick</h3>
      <img className="hand" src= { hand === "rock" ? rock :
                                  hand === "paper" ? paper :
                                  scissors}
      alt={hand} />

      <h3>Computer's pick</h3>
      <img className="hand" src= { compChoice === "rock" ? rock :
                                  compChoice === "paper" ? paper :
                                  scissors}
      alt={compChoice} />

      <Button onClick = {onClick}/>

    </div>
    );
}

export default Outcome;
