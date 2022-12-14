import React from "react";
import {BtnContainer, MyBtn} from "../css/MainPageStyled"

function MainPage() {
    return (
        <div className="mainContainer">
            <BtnContainer>
                <MyBtn to="/calculator" className="btn btn-primary">칼로리/무게 변환기</MyBtn>
                <MyBtn to="/login" className="btn btn-info">로그인</MyBtn>
            </BtnContainer>
        </div>
    );
}

export default MainPage;