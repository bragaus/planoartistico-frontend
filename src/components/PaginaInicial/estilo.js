import styled from 'styled-components';

export const DivisorDeSecao = styled.div`
    /* Define o elemento como um flex container, tornando os seus filhos flex-itens */
    display: flex;

    /* Cria um espaçamento igual entre os elementos */
    justify-content: start;    

    /* quando um dos flex itens atinge o limite do conteúdo, 
     * o último item passa para a coluna debaixo e assim por diante. */
    flex-wrap: wrap;
`;

export const DivisorDeArte = styled.div`
    width: 45%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Titulo = styled.h1`
    font-family: 'Arial', sans-serif;
    white-space: nowrap;
    position: relative;
    font-size: 13.5vw;
    text-align: center;

    @media only screen and (max-width: 768px) {
        text-align: left;
        font-size: 10vw;
    }    
`;

export const Controlador = styled.button`
    position: relative;
    font-size: 2vh;
    border: none;
    display: inline-block;
`;

export const Painel = styled.div`
    display: flex;
    justify-content: flex-end; 
    position: fixed;      
    bottom: 0px;
    background: black;
    z-index: 90000000000000000;  
`;

export const IlustracaoDescricao = styled.p`
    ${(props) => {
        const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
        return ({
            position: 'relative',
            width: `${arte.largura}%`,
            left: `${arte.esquerda}%`,
            right: `${arte.direita}%`,
            bottom: `${arte.cima}vw`,
            top: `${arte.baixo}vw`,
            fontSize: `1vw`,
            zIndex: '1'               
        })
    }}

    @media only screen and (max-width: 768px) {
        width: 80%;
        left: 0%;
        right: 0%;
        bottom: 0vw;
        top: 0vw;
    }    
`;

export const Ilustracao = styled.img`
    ${(props) => {
        const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
        return ({
            position: 'relative',
            width: `${arte.largura}%`,
            left: `${arte.esquerda}%`,
            right: `${arte.direita}%`,
            bottom: `${arte.cima}vw`,
            top: `${arte.baixo}vw`,            
        })
    }}

    @media only screen and (max-width: 768px) {
        width: 80%;
        left: 0%;
        right: 0%;
        bottom: 0vw;
        top: 0vw;
    }    
`;

export const CapaDescricao = styled.p`
    ${(props) => {
        const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
        return ({
            position: 'relative',
            width: `${arte.largura}%`,
            left: `${arte.esquerda}%`,
            right: `${arte.direita}%`,
            bottom: `${arte.cima}vw`,
            top: `${arte.baixo}vw`,
            fontSize: `1vw`,
            zIndex: '1'               
        })
    }}

    @media only screen and (max-width: 768px) {
        width: 80%;
        left: 0%;
        right: 0%;
        bottom: 0vw;
        top: 0vw;
    }
`;

export const ArteDeCapa = styled.img`
    ${(props) => {
        const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
        return ({
            position: 'relative',
            width: `${arte.largura}%`,
            left: `${arte.esquerda}%`,
            right: `${arte.direita}%`,
            bottom: `${arte.cima}vw`,
            top: `${arte.baixo}vw`,                
        })
    }}

    @media only screen and (max-width: 768px) {
        width: 80%;
        left: 0%;
        right: 0%;
        bottom: 0vw;
        top: 0vw;
    }    
`;

export const ColagemDescricao = styled.p`
    ${(props) => {
        const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
        return ({
            position: 'relative',
            width: `${arte.largura}%`,
            left: `${arte.esquerda}%`,
            right: `${arte.direita}%`,
            bottom: `${arte.cima}vw`,
            top: `${arte.baixo}vw`,
            fontSize: `1vw`,
            zIndex: '1'               
        })
    }}

    @media only screen and (max-width: 768px) {
        width: 80%;
        left: 0%;
        right: 0%;
        bottom: 0vw;
        top: 0vw;
    }        
`;

export const Colagem = styled.img`
    ${(props) => {
        const [arte] = props.arte.filter(arte => arte.ID === props.id_daArte)
        return ({
            position: 'relative',
            width: `${arte.largura}%`,
            left: `${arte.esquerda}%`,
            right: `${arte.direita}%`,
            bottom: `${arte.cima}vw`,
            top: `${arte.baixo}vw`,                
        })
    }}

    @media only screen and (max-width: 768px) {
        width: 80%;
        left: 0%;
        right: 0%;
        bottom: 0vw;
        top: 0vw;
    }        
`;