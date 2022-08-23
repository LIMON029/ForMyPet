import React from 'react';
import {FormContainer, CalcBtn} from "../css/CalculatorFormStyled";

interface ResultProps {
  cal: number;
  gram: number;
  forCalc: number;
  isForGram: boolean;
  clickHandler: () => void;
};

function Result({cal, gram, forCalc, isForGram, clickHandler}: ResultProps): React.ReactElement {
  const myClickHanlder = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    clickHandler();
  };

  return (
    <FormContainer>
      <p>입력하신 칼로리는 ${cal}kcal, 무게는 ${gram}g입니다</p>
      <p>1g당 칼로리: {cal/gram}kcal</p>
      <p>1kcal당 무게: ${gram/cal}g</p>
      <p>${forCalc}${isForGram ? `g은 ${(cal/gram) * forCalc}kcal`: `kcal은 ${(gram/cal) * forCalc}g`}입니다.</p>
      <CalcBtn className="btn btn-info" onClick={myClickHanlder}>다시 계산하기</CalcBtn>
    </FormContainer>
  );
}

export default Result;
