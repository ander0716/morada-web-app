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
        opacity: 1;
        cursor: pointer;        
    }
`;

export const ButtonStyled = styled.button`
    ${BaseButtonStyled};
    /* opacity: ${props => props.disabled ? 0.5 : 1};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}; */
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
`;

export const LinkStyled = styled(Link)` 
    ${BaseButtonStyled}
    text-decoration: none;
    display: block;

`;