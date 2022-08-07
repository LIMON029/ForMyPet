import React from 'react';
import Proptypes from 'prop-types';
import "../css/Form.css";

function Result({cal, gram, forCalc, isForGram, clickHandler}) {
  return (
    <div className='formContainer'>
        <p>입력하신 칼로리는 {cal}kcal, 무게는 {gram}g입니다</p>
        <p>1g당 칼로리: {cal/gram}kcal</p>
        <p>1kcal당 무게: {gram/cal}g</p>
        <p>{forCalc}{isForGram ? `g은 ${(cal/gram) * forCalc}kcal`: `kcal은 ${(gram/cal) * forCalc}g`}입니다. </p>
        <button className="btn btn-info calc_btn" onClick={clickHandler}>다시 계산하기</button>
    </div>
  );
}

Result.propTypes = {
    cal: Proptypes.number.isRequired,
    gram: Proptypes.number.isRequired,
    clickHandler: Proptypes.func.isRequired
};

export default Result;
