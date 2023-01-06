import './App.css';
import React, { useState } from "react";
import Score from './components/score'
import Wrapper from './components/wrapper';
import Play from "./components/play";
import Outcome from "./components/outcome";


const throws = ['rock', 'paper', 'scissors'];

const score = (you, computer) => {
  if (you === computer ) {
    return 0
  } else if (you === 'rock') {
    if (computer === 'paper') {
      return -5
    } else {
      return 1
    }
  } else if (you === 'paper') {
    if (computer === 'scissors') {
      return -5
    } else {
      return 1
    }
  } else {
    if (computer === 'rock') {
      return -5
    } else {
      return 1
    }
  }
}

const compChoice = () => throws[Math.floor(Math.random() * throws.length)];

function App() {

  let [game, setGame] = useState({
    score: 0,
    choice: '',
    compChoice: '',
  });

  const rockClickHandler = (e) => {
    console.log('rock click handler');
    const comp = compChoice();

    setGame({
      ...game,
      score: game.score ? Number(game.score + score('rock', comp)) : score('rock', comp),
      choice: 'rock',
      compChoice: comp,
    });
  }

  const scissorsClickHandler = (e) => {
    console.log('scissors click handler');
    const comp = compChoice();

    setGame({
      ...game,
      score: game.score ? Number(game.score + score('scissors', comp)) : score('scissors', comp),
      choice: 'scissors',
      compChoice: comp,
    });
  }

  const paperClickHandler = (e) => {
    console.log('paper click handler');
    const comp = compChoice();

    setGame({
      ...game,
      score: game.score ? Number(game.score + score('paper', comp)) : score('paper', comp),
      choice: 'paper',
      compChoice: comp,
    });

  }

  const playAgainClickHandler = (e) => {
    console.log('play again click handler');
    setGame({
      ...game,
      score: game.score,
      choice: '',
      compChoice: '',
    });
  }

  return (
    <div className='body'>
      <Score total= { game.score } />
      <Wrapper>
      {
        game.choice === "" ?
        throws.map((option, i) => {
          return (
            <Play
              hand = {option}
              onClick = {
                option === "rock" ? rockClickHandler :
                option === "paper" ? paperClickHandler :
                scissorsClickHandler
              }
            />
          );
        })
        :
        <Outcome hand={game.choice} compChoice={game.compChoice} onClick = {playAgainClickHandler}/>
      }
      </Wrapper>
    </div>
  );
}

export default App;
