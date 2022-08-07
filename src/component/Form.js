import React from 'react';
import Proptypes from 'prop-types';
import "../css/Form.css";

function Form({cal, gram, calChangeHandler, gramChangeHandler, clickHandler}) {
  const onClickHandler = () => {
    if(cal > 0 && gram > 0) {
      clickHandler();
    } else {
      alert("칼로리나 무게는 0이 될 수 없습니다.");
    }
  };

  const enterKeyHandler = (event) => {
    if(event.key == 'Enter') {
      onClickHandler();
    }
  }

  return (
    <div className='formContainer'>
      <div>
          <label htmlFor='cal_input'>칼로리(kcal)</label>
          <input
              placeholder="칼로리(kcal)"
              type="number"
              id='cal_input'
              name='cal_input'
              className='form-control'
              value={cal}
              onChange={calChangeHandler}
              onKeyPress={enterKeyHandler} />
          <label htmlFor='gram_input'>무게(g)</label>
          <input
              placeholder="무게(g)"
              type="number"
              name='gram_input'
              id='gram_input'
              className='form-control'
              value={gram}
              onChange={gramChangeHandler}
              onKeyPress={enterKeyHandler} />
          <button className="btn btn-info calc_btn" onClick={onClickHandler}>계산</button>
        </div>
    </div>
  );
}

Form.propTypes = {
    cal: Proptypes.number.isRequired,
    gram: Proptypes.number.isRequired,
    calChangeHandler: Proptypes.func.isRequired,
    gramChangeHandler: Proptypes.func.isRequired,
    clickHandler: Proptypes.func.isRequired
};

export default Form;
