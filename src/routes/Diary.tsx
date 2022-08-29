import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {GoToMainBtn} from '../component/Btns';
import DiaryItem from "../component/DiaryItem";
import { DiaryMainContainer, DiaryGridWrapper } from '../css/DiaryStyled';
import { SERVER_URL } from '../GlobalVariables';

function Diary() {
    const [memos, setMemos] = useState([]);
    useEffect(() => {
        axios.post(`${SERVER_URL}/api/getMemos`)
            .then((res) => setMemos(res.data))
            .catch((res) => console.log("Error!"));
    }, []);

    const [cnt, setCnt] = useState([1]);
    const onClicnCnt = () => {
        setCnt([1, ...cnt]);
        console.log(memos);
    };
    return (<DiaryMainContainer>
        <GoToMainBtn />
        <button onClick={onClicnCnt}>COUNT UP</button>
        <DiaryGridWrapper>
            {cnt.map((id, index) => (<DiaryItem key={index}/>))}
        </DiaryGridWrapper>
    </DiaryMainContainer>);
}

export default Diary;