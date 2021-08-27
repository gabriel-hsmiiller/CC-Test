import React, { Component } from 'react';
import './index.css';

const INITIAL_STATE = {
    form: {
        nome: '',
        email: '',
        whatsapp: '',
        assunto: '',
        optional: {
            hobbies: {
                netflix: false,
                churrasco: false,
                sair: false
            },
            preferences: '',
            contact: ''
        }
    }
}

export default class FormComponent extends Component {

    constructor(props){
        super(props);

        this.state = INITIAL_STATE
    }

    resetFormState = () => {
        this.setState(INITIAL_STATE)
    }

    setFormState = (field, value) => {
        const { form } = this.state
        this.setState({ form: { ...form, [field]: value } });
    }

    setOptionalFormState = (field, value) => {
        const { form, form: { optional } } = this.state
        this.setState({ form: { ...form, optional: { ...optional, [field]: value } } });
    }

    handleFormSubmit = ($event) => {
        $event.preventDefault();
        const { form } = this.state;
        const { updateShowForm } = this.props;

        this.resetFormState();
        updateShowForm(form);
    }

    render(){
        const { form: { nome, email, whatsapp, assunto, optional: { contact, hobbies, preferences } } } = this.state;

        return (
            <section className="form">
                <div className="form-header">
                    <h2>Entre em contato</h2>
                </div>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="main-form">
                        <label>
                            <span>Nome</span>
                            <input value={nome} onChange={($event) => this.setFormState('nome', $event.target.value)} />
                        </label>
                        <label>
                            <span>E-mail</span>
                            <input value={email} onChange={($event) => this.setFormState('email', $event.target.value)} />
                        </label>
                        <label>
                            <span>WhatsApp</span>
                            <input value={whatsapp} onChange={($event) => this.setFormState('whatsapp', $event.target.value)} />
                        </label>
                        <label>
                            <span>Assunto</span>
                            <textarea value={assunto} onChange={($event) => this.setFormState('assunto', $event.target.value)} ></textarea>
                        </label>
                    </div>
                    <div className="additional-form">
                        <div className="hobbies">
                            <h3>Hobbies</h3>
                            <label>
                                <input type="checkbox" checked={hobbies['netflix']} onChange={($event) => this.setOptionalFormState('hobbies', {...hobbies, netflix: $event.target.checked })} />
                                <span>Netflix</span>
                            </label>
                            <label>
                                <input type="checkbox" checked={hobbies['churrasco']} onChange={($event) => this.setOptionalFormState('hobbies', {...hobbies, churrasco: $event.target.checked })} />
                                <span>Churrasco</span>
                            </label>
                            <label>
                                <input type="checkbox" checked={hobbies['sair']} onChange={($event) => this.setOptionalFormState('hobbies', {...hobbies, sair: $event.target.checked })} />
                                <span>Sair com amigos</span>
                            </label>
                        </div>
                        <div className="preferences">
                            <h3>Gosto mais de: </h3>
                            <label>
                                <input type="radio" value="frontend" checked={preferences === 'frontend'} onChange={($event) => this.setOptionalFormState('preferences', $event.target.value)} />
                                <span>Front-End</span>
                            </label>
                            <label>
                                <input type="radio" value="backend" checked={preferences === 'backend'} onChange={($event) => this.setOptionalFormState('preferences', $event.target.value)} />
                                <span>Back-End</span>
                            </label>
                            <label>
                                <input type="radio" value="design" checked={preferences === 'design'} onChange={($event) => this.setOptionalFormState('preferences', $event.target.value)} />
                                <span>Design</span>
                            </label>
                        </div>
                        <div className="contact">
                            <h3>Prefere contato por?</h3>
                            <select value={contact} onChange={($event) => this.setOptionalFormState('contact', $event.target.value)}>
                                <option>Escolha</option>
                                <option>Email</option>
                                <option>WhatsApp</option>
                            </select>
                        </div>
                    </div>
                    <div className="actions">
                        <button type="submit">Enviar <span class="material-icons-outlined">chevron_right</span></button>
                    </div>
                </form>
            </section>
        )
    }
}