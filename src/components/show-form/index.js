import React, { Component } from 'react';
import './index.css';

export default class ShowFormComponent extends Component {

    constructor(props){
        super(props);
    }

    shouldShowSection = (obj) => {
        if(obj){
            const keys = Object.keys(obj);
            return keys.length > 0 && 
                keys.reduce((prev,curr) => 
                    prev ? prev : (curr === 'optional' || curr === 'hobbies' ? 
                        this.shouldShowSection(obj[curr]) : !!obj[curr])
                , false);
        }
        return false;
    }

    render(){
        const { form } = this.props;

        return (
            <section className="show-form">
                { this.shouldShowSection(form) ? (
                    <>
                        <h3>Resultado do form acima</h3>
                        <p><span>Nome: </span> <span>{form.nome}</span></p>
                        <p><span>Email: </span> <span>{form.email}</span></p>
                        <p><span>Whatsapp: </span> <span>{form.whatsapp}</span></p>
                        <p><span>Assunto: </span> <span>{form.assunto}</span></p>
                        <p><span>Hobbies: </span> <span>{Object.keys(form.optional.hobbies).filter(k => form.optional.hobbies[k]).join(', ')}</span></p>
                        <p><span>Gosto mais de atuar com: </span> <span>{form.optional.preferences}</span></p>
                        <p><span>Prefere contato por: </span> <span>{form.optional.contact}</span></p>
                    </>
                ) : <></>}
            </section>
        )
    }
}