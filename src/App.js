import React, { useState } from 'react';
import Form from "./component/Form"
import Result from "./component/Result"

function App() {
  const [cal, setCal] = useState(0);
  const [gram, setGram] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  const calChangeHandler = (event) => {
    setCal(event.target.value);
  };

  const gramChangeHandler = (event) => {
    setGram(event.target.value);
  };

  const btnClickHandler = () => {
    setIsSubmit((prev)=>!prev);
  };

  const resetClcikHandler = () => {
    setCal(0);
    setGram(0);
    setIsSubmit((prev)=>!prev);
  };

  return (
    <div className='mainContainer'>
      {isSubmit
        ? <Result cal={cal} gram={gram} clickHandler={resetClcikHandler}/>
        : <Form
            cal={cal}
            gram={gram}
            calChangeHandler={calChangeHandler}
            gramChangeHandler={gramChangeHandler}
            clickHandler={btnClickHandler} />}
    </div>
  );
}

export default App;
