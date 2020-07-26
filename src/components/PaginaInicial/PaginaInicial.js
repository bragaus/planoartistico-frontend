import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Contexto } from '../../Contexto/ContextoDeAutorizacao';

import Header from '../Header';
import Footer from '../Footer';

import { 
    // DivisorDeSecao, 
    // DivisorDeArte,
    // Titulo,
    // IlustracaoDescricao, 
    // Ilustracao,
    // ArteDeCapa,
    // CapaDescricao,
    // ColagemDescricao,
    // Colagem,
    // Painel,

    Main,
    Titulo,
    Flex,
    Ilustracao,
    DivEmail,
    Portateis
} from './estilo';

const PaginaInicial = () => {

    const { autenticado } = useContext(Contexto);

    // Esses estados armazenam as artes separadas pelos tipos
    const [ilustracoes, setIlustracoes] = useState([]);
    const [artesDeCapa, setArtesDeCapa] = useState([]);
    const [colagens, setColagens] = useState([]);

    useEffect(() => {

        // Requisições das artes
        async function carregarArtes() {

            const requisicaoIlustracao = await api.get('/ilustracao');
            const requisicaoArteDeCapa = await api.get('/arteDeCapa');
            const requisicaoColagem = await api.get('/colagem');
            
            setIlustracoes(requisicaoIlustracao.data);
            setArtesDeCapa(requisicaoArteDeCapa.data);
            setColagens(requisicaoColagem.data);

        }

        carregarArtes();
    }, []);    

    return (
    <>
        <Header />

        <Main>
            <section>
                <header>
                    <Titulo id="ilustrações">ILLUSTRATION</Titulo>
                </header>

                <Flex>

                    {ilustracoes.map(ilustracao => (
                        <figure>
                            <Ilustracao 
                                src={ilustracao.url || ilustracao.urlPreview }
                                alt={ilustracao.titulo}
                            />
                            <figcaption>{ilustracao.titulo} <br /> {ilustracao.desc}</figcaption>
                        </figure>
                    ))}

                </Flex>
            </section>

            <section>
                <header>
                    <Titulo id="ilustracoes">ALBUM COVER</Titulo>
                </header>

                <Flex>

                    {artesDeCapa.map(arteDeCapa => (
                        <figure>
                            <Ilustracao 
                                src={arteDeCapa.url || arteDeCapa.urlPreview }
                                alt={arteDeCapa.titulo}
                            />
                            <figcaption>{arteDeCapa.titulo} <br /> {arteDeCapa.desc}</figcaption>
                        </figure>
                    ))}

                </Flex>
            </section>

            <section>
                <header>
                    <Titulo id="collages">COLLAGES</Titulo>
                </header>

                <Flex>

                    {colagens.map(colagem => (
                        <figure>
                            <Ilustracao 
                                src={colagem.url || colagem.urlPreview }
                                alt={colagem.titulo}
                            />
                            <figcaption>{colagem.titulo} <br /> {colagem.desc}</figcaption>
                        </figure>
                    ))}

                </Flex>
            </section>            
 
        </Main>

        {/* Section para dispositivos portateis */}
        <Portateis>
            <DivEmail>
                <span>NEW EMAIL...</span>
            </DivEmail>
        </Portateis>

        <Footer />
    </>
    );        

{/*
            
            <Titulo id="ilustrações">ILLUSTRATION</Titulo>                
            <DivisorDeSecao>

                {ilustracoes.map(arte => (
                <DivisorDeArte key={arte.ID}>          

                        
                    <Link to={{pathname: `/visualizarArte/${arte.ID}`, id: arte.ID}}>
                        <Ilustracao 
                            src={arte.url || arte.urlPreview} 
                            alt={arte.titulo}
                            arte={ilustracoes} 
                            id_daArte={arte.ID}
                        />
                    </Link>
                    
                    <IlustracaoDescricao arte={ilustracoes} id_daArte={arte.ID}>
                        {arte.titulo}<br/>{arte.descricao}
                    </IlustracaoDescricao>

                </DivisorDeArte>                             
                ))}

            </DivisorDeSecao>


            <Titulo id="artesDeCapa">ALBUM COVER</Titulo>   
            <DivisorDeSecao>

                {artesDeCapa.map(arte => (
                <DivisorDeArte key={arte.ID}>          

                        <Link to={{pathname: `/visualizarArte/${arte.ID}`, id: arte.ID}} >
                            <ArteDeCapa 
                                src={arte.url || arte.urlPreview} 
                                alt={arte.titulo}
                                arte={artesDeCapa} 
                                id_daArte={arte.ID}
                            />
                        </Link>

                        <CapaDescricao arte={artesDeCapa} id_daArte={arte.ID}>
                            {arte.titulo}<br/>{arte.descricao}
                        </CapaDescricao>

                </DivisorDeArte>                             
                ))}

            </DivisorDeSecao>                

 
            <Titulo id="colagens">COLLAGE</Titulo>  
            <DivisorDeSecao>

                {colagens.map(arte => (
                <DivisorDeArte key={arte.ID}>

                        <Link to={{pathname: `/visualizarArte/${arte.ID}`, id: arte.ID}} >
                            <Colagem 
                                src={arte.url || arte.urlPreview} 
                                alt={arte.titulo}
                                arte={colagens} 
                                id_daArte={arte.ID}
                            />
                        </Link>

                        <ColagemDescricao arte={colagens} id_daArte={arte.ID}>
                            {arte.titulo}<br/>{arte.descricao}
                        </ColagemDescricao>

                </DivisorDeArte>                             
                ))}

            </DivisorDeSecao>

            {autenticado && <Painel>
                <Link 
                    to="PainelDeControle" 
                    style={{fontSize: '3vh'}}
                >
                    Dashboard
                </Link>
            </Painel>} 
*/}        
};

export default PaginaInicial;