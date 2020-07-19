import styled, { keyframes } from 'styled-components';
import { LogoIcon, SetaIcon } from '../../styles/Icones';

const rotacao = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled(LogoIcon)`
     @media only screen and (max-width: 768px) {
        width: 25% !important;
        left: 2% !important;
        top: 2% !important;
    }

    width: 15%;
    fill: #000;

    position: fixed;
    left: 20%;
    top: 1%;
    z-index: 2;

    -webkit-animation:${rotacao} 8s linear infinite;
    -moz-animation:${rotacao} 8s linear infinite;
    animation:${rotacao} 8s linear infinite;
`;

export const Seta = styled(SetaIcon)`
    width: 20%;
    fill: #000;
`;

export const Superior = styled.header.attrs(props => ({
    className: props.className
}))`

    & .info {
        font-size: 4vw;
        text-decoration: none;
        color: #000000;
        position: fixed;
        top: -1%;
        left: 0%;
        z-index: 2;
        width: 15%;          
        &:hover {
            color: #ff0000;
            background: #ff0000;
            > svg {
                fill: #ff0000;
            }
        }

    }

    ul {
        position: fixed;
        right: 0%;
        top: -1%;
        z-index: 2;
        li {
            text-align: right;
            font-size: 4vw;
            list-style: none;
            z-index: 3;

            a {
                text-decoration: none;
                color: #000000;
                &:hover{
                    background: #ff0000;
                    color: #ff0000;
                    cursor: pointer;
                }
            }
            
            button {
                font-size: 4vw;
                color: #000000;
                background: none;
                border: none;
                outline: inherit;
                cursor: pointer;
                &:hover{
                    background: #ff0000;
                    color: #ff0000;
                }
            }
        }
    }

    & .celular {
        display: none;
    }

    @media only screen and (max-width: 768px) {
        & .desktop {
            display: none !important;
        }
        & .info {
            display: none !important;
        }
        & .celular {
            display: contents !important;
        }
        ul {
            text-decoration: none;
            color: #000000;
            position: fixed;
            top: 5%;
            right: 0%;
            z-index: 2;
            li {
                font-size: 10vw;
                button {
                    font-size: 10vw;
                }                
            }
        }
    }
`;

export const Auxiliar = styled.div`
    height: 20vw;
    @media only screen and (max-width: 768px) {
        height: 35vw !important;
    }     
`;