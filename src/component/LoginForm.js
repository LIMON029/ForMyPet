import React, { useState } from 'react';
import * as S from "../css/LoginPageStyled"
import {KAKAO_REST_KEY, KAKAO_REDIRECT_URL, KAKAO_AUTH_URL } from '../GlobalVariables';

function LoginForm() {
    const KAKAO_PATH = `${KAKAO_AUTH_URL}/oauth/authorize?client_id=${KAKAO_REST_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
    const id_reg = /[^a-zA-Z0-9_]/g;
    const pwd_reg = /[^a-zA-Z0-9_~!]/g;;
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [realPassword, setRealPassword] = useState("");

    const [idStatus, setIdStatus] = useState(true);
    const [pwdStatus, setPwdStatus] = useState(true);

    const idChangeHandler = (event) => {
        const n_id = event.target.value;
        setIdStatus(!id_reg.test(n_id));
        setId(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        const pwd_input = event.target.value;
        const pwd_len = pwd_input.length;
        const n_pwd = pwd_len < realPassword.length
            ? realPassword.slice(0, pwd_len) 
            : realPassword + pwd_input.replace(/#/g,'');
        setPwdStatus(!pwd_reg.test(n_pwd));
        setRealPassword(n_pwd);
        setPassword('#'.repeat(pwd_len));
    };

    const onClickLoginBtn = () => {
        if(idStatus && pwdStatus) {
            console.log("OK");
        } else {
            console.log("Cant Go");
        }
    };
    
    return (
        <S.FormContainer>
            { false
            ? <form onSubmit={(event) => event.preventDefault()}>
                <label htmlFor='id_input'>아이디</label>
                <S.InputStyle
                    type="text"
                    id='id_input'
                    name='id_input'
                    className='form-control'
                    placeholder='아이디를 입력해주세요'
                    value={id}
                    onChange={idChangeHandler} />
                {idStatus ? null :<S.ErrorMessage>공백, 특수기호(_ 제외) 사용 불가</S.ErrorMessage>}
                <label htmlFor='password_input'>비밀번호</label>
                <S.InputStyle
                    type="password"
                    id='password_input'
                    name='password_input'
                    className='form-control'
                    placeholder='비밀번호를 입력해주세요'
                    value={password}
                    onChange={passwordChangeHandler}
                    autoComplete="current password" />
                {pwdStatus ? null :<S.ErrorMessage>공백, 특수기호(_, ~, ! 제외) 사용 불가</S.ErrorMessage>}
                <S.BtnContainer>
                    <S.HorBtnContainer>
                        <S.MyBtn isTop={true} isLeft={true} className='btn btn-primary' onClick={onClickLoginBtn}>로그인</S.MyBtn>
                        <S.MyBtn isTop={true} isLeft={false} className='btn btn-primary' onClick={onClickLoginBtn}> 자동 로그인</S.MyBtn>
                    </S.HorBtnContainer>
                </S.BtnContainer>
                </form>
            : null
            }
            <a href={KAKAO_PATH}>
                <S.KakaoBtn alt='kakao-login' src={require('../images/kakao_login.png')}/>
            </a>
        </S.FormContainer>
    );
}

export default LoginForm;