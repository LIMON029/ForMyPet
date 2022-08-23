import React, { useState } from 'react';
import Form from "../component/CalculatorForm"
import Result from "../component/Result"
import {GoToMainBtn} from "../component/Btns"

function MainCalculator() {
  const [cal, setCal] = useState<number>(0);
  const [gram, setGram] = useState<number>(0);
  const [forCalc, setForCalc] = useState<number>(0);
  const [isForGram, setIsForGram] = useState<boolean>(true);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const calChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCal(Number(event.target.value));
  };

  const gramChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGram(Number(event.target.value));
  };

  const forCalcChagneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForCalc(Number(event.target.value));
  };

  const isForGramHandler = () => {
    setIsForGram(true);
  };

  const isForCalHandler = () => {
    setIsForGram(false);
  };

  const btnClickHandler = () => {
    setIsSubmit((prev)=>!prev);
  };

  const resetClcikHandler = () => {
    setCal(0);
    setGram(0);
    setForCalc(0);
    setIsForGram(true);
    setIsSubmit((prev)=>!prev);
  };

  return (
    <div className='mainContainer'>
      <GoToMainBtn />
      {isSubmit
        ? <Result cal={cal} gram={gram} forCalc={forCalc} isForGram={isForGram} clickHandler={resetClcikHandler}/>
        : <Form
            cal={cal}
            gram={gram}
            calc={forCalc}
            isForGram={isForGram}
            calChangeHandler={calChangeHandler}
            gramChangeHandler={gramChangeHandler}
            calcChangeHandler = {forCalcChagneHandler}
            IsForGramHandler = {isForGramHandler}
            IsForCalcHandler = {isForCalHandler}
            clickHandler={btnClickHandler} />}
    </div>
  );
}

export default MainCalculator;
