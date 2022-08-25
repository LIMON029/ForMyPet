import styled from 'styled-components';

export const DiaryMainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 30px 0px 30px 0px;
`;

export const DiaryGridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    row-gap: 15px;
    margin-top: 20px;
    @media(max-width: 922px) {
        grid-template-columns: 1fr;
    }
`;

export const Font30Span = styled.span`
    font-size: 30px;
    @media(max-width: 300px) {
       font-size: 15px;
    }
`;

export const DiaryItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    background-color: white;
    padding: 11px;
    border-radius: 10px;
    border: solid black;
`;

export const DaysWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 5px 0px 5px 0px;
    gap: 10px;
    @media(max-width: 300px) {
        gap: 5px;
    }
`;

export const DayCircle = styled.div`
    width: 40px;
    height: 40px;
    background-color: lightblue;
    padding: 9px;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    @media(max-width: 300px) {
        gap: 5px;
        width: 20px;
        height: 20px;
    }
`;

export const DayText = styled.span`
    padding: 0px;
    text-align: center;
    @media(max-width: 300px) {
        font-size: 9px;
    }
`;

export const IconWrapper = styled.span`
    text-align: center;
`;

export const FeedInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    @media(max-width: 300px) {
        display: grid;
        grid-template-columns: 10px auto;
        font-size: 9px;
        column-gap: 5px;
        margin-top: 5px;
        align-content: center;
        justify-content: start;
        align-items: center;
        justify-items: stretch;
    }
`;