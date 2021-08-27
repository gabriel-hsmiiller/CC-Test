import React, { Component } from 'react';
import './index.css';

export default class InfoComponent extends Component {

    render(){
        return (
            <section className="info">
                <img src="https://avatars.githubusercontent.com/u/46598049?v=4" alt="Eu" />
                <h2>Gabriel Henrique Da Silva Miiller</h2>
                <h3>Minha história profissional</h3>
                <article> 
                    Universitário e desenvolvedor front-end desde 2019. 
                    Apaixonado por tecnologia e design, sou estudante 
                    de Análise e Desenvolvimento de Sistemas pela Fatec 
                    Campinas e pretendo também cursar Design na USP 
                    futuramente.
                </article>
            </section>
        )
    }
}