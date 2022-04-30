import  styled  from 'styled-components';
export const PropertyTypeButtonWraper = styled.div`
    border-radius: 10px;
    background-color: ${props => props.selected ? '#4A148C' : ' #F3E5F5'};
    min-width: 150px;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        color:${props => props.selected ? '#FFF' : ' #4A148C' };
    }
    &:hover{
        background: #4A148C;
        cursor: pointer;
        svg{
            color: #FFF;
        }
        p{
            color: #FFF;
        }
    }
    `

export const IconWrapper = styled.div `
    margin-top: 5px;
    svg{
        font-size: 2.0em;
        color: ${props => props.selected ? '#FFF' : ' #4A148C' };
    }
`