import styled from 'styled-components';

export const MenuWrapper = styled.div`
    border-top: 2px solid #ccc;
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #FFF;
    display: flex;
    a{
        flex: 1;
        text-decoration: none;
    }
`;

export const MenuItemWrapper = styled.section`
    flex: 1;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    svg{
        color: #4A148C;
        font-size: 1.3em;
    }
    p{
        margin: 5px 0;
    }
    &:hover{
        background-color: #4A148C;
        svg{
            color: #FFF;
        }
        p{
            color: #FFF;
        }
    }
`;