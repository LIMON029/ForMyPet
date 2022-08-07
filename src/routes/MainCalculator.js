import React, { useState } from 'react';
import Form from "../component/Form"
import Result from "../component/Result"

function MainCalculator() {
  const [cal, setCal] = useState(0);
  const [gram, setGram] = useState(0);
  const [forCalc, setForCalc] = useState(0);
  const [isForGram, setIsForGram] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const calChangeHandler = (event) => {
    setCal(event.target.value);
  };

  const gramChangeHandler = (event) => {
    setGram(event.target.value);
  };

  const forCalcChagneHandler = (event) => {
    setForCalc(event.target.value);
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
