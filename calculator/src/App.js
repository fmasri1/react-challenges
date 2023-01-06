import './App.css';
import Wrapper from './components/wrapper';
import Screen from './components/screen';
import ButtonBox from './components/button_box';
import Button from './components/button';
import React, { useState } from "react";

const btnValues = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
  ["RESET", "="],
];

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const math = (a, b, sign) =>
sign === '+' ? a + b :
sign === '-' ? a - b :
sign === 'x' ? a * b :
a / b;

const App = () => {
  let [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0,
  })

  const numClickHandler = (e) => {
    e.preventDefault();
    console.log('number click handler');

    const value = e.target.innerHTML;

    if (calc.num.toString().length < 16) {
      setCalc({
        // overwite calc with the below
        ...calc,
        num:
          calc.num === 0 && value === "0" ?
            "0" : removeSpaces(calc.num) % 1 === 0 ?
            toLocaleString(Number(removeSpaces(calc.num + value))) : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    console.log('decinaml click handler');

    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    console.log('sign click handler');

    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: calc.num && calc.res ? toLocaleString(math(Number(removeSpaces(calc.res)), Number(removeSpaces(calc.num)), calc.sign)) : calc.res = calc.num,
      num: 0,
    });
  };

  const equalsClickHandler = (e) => {
    console.log('equals click handler');

    if (calc.num && calc.sign) {
      setCalc({
        ...calc,
        res:
        calc.num === '0' && calc.sign === '/' ? "Can't divide by 0" :
        toLocaleString(
          math(
            Number(removeSpaces(calc.res)), Number(removeSpaces(calc.num)), calc.sign
            )
            ),
        sign: '',
        num: 0,
      });
    }
  };

  const resetClickHandler = (e) => {
    setCalc({
      ...calc,
      sign: '',
      num: 0,
      res: 0,
    });
  };

  const deleteClickHandler = (e) => {
    e.preventDefault();

    setCalc({
      ...calc,
      num: calc.num ? calc.num.toString().replace(/.$/, '') : 0,
    });
  }

  return (
    <div className='App'>
    <div className='body'>
      <Wrapper>
        <Screen value = { calc.num ? calc.num : calc.res } />
        <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
            <Button
              className={btn === "=" ? "equals": btn === "RESET" ? "reset" : "button"}
              value={btn}
              onClick={

                btn === "RESET" ? resetClickHandler :
                btn === 'DEL' ? deleteClickHandler :
                btn === '.' ? commaClickHandler :
                btn === '=' ? equalsClickHandler :
                btn === '+' || btn === '-' || btn ==='x' || btn === '/' ? signClickHandler :
                numClickHandler
              }
            />
            );
          })
        }
        </ButtonBox>
        </Wrapper>
      </div>
    </div>
  );
};

export default App;
