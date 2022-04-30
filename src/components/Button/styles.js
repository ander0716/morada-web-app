import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const BaseButtonStyled = css`
    width: 100%;
    font-size: 1em;
    color: #FFF;
    background-color: #4A148C;
    text-align: center;
    border: none;
    border-radius: 5px;
    padding: 9px 0;
    opacity: 0.9;
    &:hover{
        cursor: pointer;
        opacity: 1;
    }
`;

export const ButtonStyled = styled.button`
    ${BaseButtonStyled}
`;

export const LinkStyled = styled(Link)` 
    ${BaseButtonStyled}
    text-decoration: none;
    display: block;

`;