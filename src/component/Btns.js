import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GoToMainBtnStyle = styled(Link)`
    font-size: 20px;
    color: #7c80fe;
    text-decoration: none;
    &:hover {
        color: #52549f;
        text-decoration: none;
    }
`;

export function GoToMainBtn() {
    return (
        <div class="titleWrapper">
            <GoToMainBtnStyle to="/">
                <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
                &nbsp;메인으로
            </GoToMainBtnStyle>
        </div>
    );
}