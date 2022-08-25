import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBoxOpen, faBolt } from '@fortawesome/free-solid-svg-icons';
import { DayCircle, DaysWrapper, DiaryItemWrapper, Font30Span, FeedInfoWrapper, DayText, IconWrapper } from '../css/DiaryStyled';

function DiaryItem() {
    return (<DiaryItemWrapper>
        <Font30Span><FontAwesomeIcon icon={faUtensils}/></Font30Span>
        <div>
            <Font30Span>제목</Font30Span>
            <DaysWrapper>
                <DayCircle><DayText>월</DayText></DayCircle>
                <DayCircle><DayText>화</DayText></DayCircle>
                <DayCircle><DayText>수</DayText></DayCircle>
                <DayCircle><DayText>목</DayText></DayCircle>
                <DayCircle><DayText>금</DayText></DayCircle>
                <DayCircle><DayText>토</DayText></DayCircle>
                <DayCircle><DayText>일</DayText></DayCircle>
            </DaysWrapper>
            <FeedInfoWrapper>
                <IconWrapper><FontAwesomeIcon icon={faBoxOpen}/></IconWrapper>
                <span id='feed_types'>사료 종류: 2개</span>
                <IconWrapper><FontAwesomeIcon icon={faBolt}/></IconWrapper>
                <span id='feed_kcal'>일평균 칼로리: 2000kcal</span>
            </FeedInfoWrapper>
        </div>
    </DiaryItemWrapper>);
}

export default DiaryItem;