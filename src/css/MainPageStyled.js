import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    width: 380px;
    align-items: stretch;
    padding: 20px;
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

export const MyBtn = styled(Link)`
    height: 80px;
    line-height: 66px;
    width: 100%;
    margin: 5px;
    font-size: 20px;
`;