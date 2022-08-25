import React from 'react';
import {GoToMainBtn} from '../component/Btns';
import DiaryItem from "../component/DiaryItem";
import { DiaryMainContainer, DiaryGridWrapper } from '../css/DiaryStyled';

function Diary() {
    return (<DiaryMainContainer>
        <GoToMainBtn />
        <DiaryGridWrapper>
            <DiaryItem />
            <DiaryItem />
            <DiaryItem />
            <DiaryItem />
            <DiaryItem />
            <DiaryItem />
            <DiaryItem />
            <DiaryItem />
            <DiaryItem />
            <DiaryItem />
        </DiaryGridWrapper>
    </DiaryMainContainer>);
}

export default Diary;