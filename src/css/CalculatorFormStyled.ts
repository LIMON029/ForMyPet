import styled from 'styled-components';

interface SelectedBtnType {
    btntype: string;
    isForGram: boolean;
}


export const FormContainer=styled.div`
    width: 380px;
    padding: 20px;
    border: 3px solid black;
    background: #ffffff;
    border-radius: 10px;
    height: 320px;
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

export const InputStyle=styled.input`
    margin-bottom: 10px;
`;

export const CalcBtn=styled.button`
    margin-top: 15px;
    width: 100%;  
`;

export const TypeSelectBtn=styled.button<SelectedBtnType>`
    width: 50%;
    margin-top: 10px;
    border-radius: ${props => props.btntype === "left" ? "5px 0px 0px 5px" : "0px 5px 5px 0px"};
    background-color: ${props => props.isForGram ? "#31b0d5" : null};
    border-color: ${props => props.isForGram ? "#269abc" : null};
    &:focus {
        outline: none;
    }
`;