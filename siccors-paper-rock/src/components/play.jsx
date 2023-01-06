import paper from "./images/paper.svg"
import scissors from "./images/scissors.svg"
import rock from "./images/rock.svg"


const Play = ({hand, onClick}) => {
  return (
      <img className="hand" src= { hand === "rock" ? rock :
                                  hand === "paper" ? paper :
                                  scissors}
      alt={hand} onClick= {onClick}/>
    );
}

export default Play;
