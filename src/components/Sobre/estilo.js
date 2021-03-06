import styled from 'styled-components';
import { EstrelaSVG, InfoSVG, ArameNormalSVG, ArameLargoSVG, HaveNiceDaySVG } from '../../styles/Icones';

export const Container = styled.div`
    background: var(--cinza);
`;

export const ParteDeCima = styled.header`
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > a {
            color: var(--preto);

            > h1 {
                font-size: 11vw;
                white-space: nowrap;
                margin-left: 3px;
            }
        }

        > svg {
            display: none;
        }
    } 

    hr {
        border: 1px solid var(--preto);
    }

    @media only screen and (min-width: 424px) {
        > div {
            flex-direction: initial;

            > a {
                > h1 {
                    font-size: 7vw;
                }
            }

            > svg {
                display: block;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        > div {
            justify-content: space-between;
            align-items: flex-start;
            > a {
                > h1 {
                    font-size: 6vw;
                    margin-left: 0;
                }
            }
        }
    }    
`;

export const Principal = styled.main`
    > p {
        font-size: 2rem;
        color: var(--preto);

        padding-top: 2rem;
        margin: 0px 3px;
    }

    & .criadores {
        font-size: 1.5rem;
        text-align: right;
    }

    & .haveANiceDay {
        &::first-line { 
            font-size: 10.3vw;
        }

        font-size: 10vw;
        color: var(--azul);
        line-height: 80%;
        text-align: center;

        padding-bottom: 2rem;
    }
    
    @media only screen and (min-width: 320px) {
        > p {
            font-size: 3rem;
        }

        & .criadores {
            font-size: 2rem;
        }
    }

    @media only screen and (min-width: 425px) {
        & .criadores {
            font-size: 2.8rem;
        }        
    }  

    @media only screen and (min-width: 768px) {
        > p {
            font-size: 4rem;
        }

        & .criadores {
            font-size: 4rem;
        }

        & .haveANiceDay {
            &::first-line { 
                font-size: 6vw;
            }

            font-size: 5.5vw;
        }        
    }

    @media only screen and (min-width: 1024px) {
        > p {
            font-size: 8rem;
        }

        > p + p {
            font-size: 8rem;
            padding-top: 15rem;
        }

        & .como40Paginas {
            padding-top: 40rem;
        }

        & .criadores {
            font-size: 4rem;
            padding-top: 7rem;
        }

        & .haveANiceDay {
            &::first-line { 
                font-size: 7.6rem;
            }

            font-size: 7rem;
            line-height: 5.5rem;
        }         
    }
`;

export const ParteDeBaixo = styled.footer`
    
    > h3 {
        font-size: 5vw;
        margin-top: 0.1%;
        padding-bottom: 1rem;
        text-align: center;
    }

    @media only screen and (min-width: 768px) {
        > h3 {
            font-size: 2vw;            
        }
    } 
    
    @media only screen and (min-width: 1024px) {
        > h3 {
            font-size: 1.5vw;                     
        }        
    }    
`;

export const IconesDeCima = styled(InfoSVG)`
    width: 41%;
    fill: #000;
    padding-top: 3px;
    padding-right: 4px;
`;

export const ArameComputadorDeMesa = styled(ArameLargoSVG)`
    display: none;

    @media only screen and (min-width: 500px) {
        display: initial;
        margin-top: 2%;
        width: 100%;
        fill: #000;
    }
`;

export const ArameDispositivoMovel = styled(ArameNormalSVG)`
    display: none;

    @media only screen and (max-width: 500px) {
        display: initial;
        padding-top: 10px;
        width: 100%;
        fill: #000;
    }
`;

export const Estrela = styled(EstrelaSVG)`
    width: 20%;
    margin: 20% 39%;
    fill: #1eff00;
`;

export const HaveNiceDay = styled(HaveNiceDaySVG)`
    width: 90%;
    margin-left: 4.5%;
    fill: var(--azul);

    @media only screen and (min-width: 1024px) {
        width: 55%;
        margin-left: 22.5%;        
    }
`;