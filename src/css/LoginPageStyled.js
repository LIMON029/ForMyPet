import styled from 'styled-components';

export const FormContainer=styled.div`
    width: 380px;
    padding: 20px;
    border: 3px solid black;
    background: #ffffff;
    border-radius: 10px;
    height: 260px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: stretch;
    @media(max-width: 500px) {
        width: 300px;
    }
    @media(max-width: 400px) {
        width: 280px;
    }
    @media(max-width: 300px) {
        width: 200px;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-weight: 100;
    padding: 0px 5px 0px 5px;
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;
    padding: 0;
    height: 75px;
`;

export const HorBtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

export const MyBtn = styled.button`
    width: 100%;
    margin-bottom: ${(props) => props.isTop ? "5px" : null};
    margin-right: ${(props) => props.isLeft ? "5px" : null};
    background-color: ${(props) => props.isLeft ? "#0089ff" : null};
    border-color: ${(props) => props.isLeft ? "#0089ff" : null};
    &:hover {
        background-color: ${(props) => props.isLeft ? "#0071d2" : null};
        border-color: ${(props) => props.isLeft ? "#0071d2" : null};
    }
`;

export const InputStyle=styled.input`
    margin-bottom: 10px;
`;