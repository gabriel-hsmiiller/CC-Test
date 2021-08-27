import './App.css';
import React, { Component } from 'react';
import FormComponent from './components/form';
import HeaderComponent from './components/header';
import InfoComponent from './components/info';
import ShowFormComponent from './components/show-form';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      form: {}
    }
  }

  setForm = (form) => {
    this.setState({ form })
  }

  render(){
    const { form } = this.state;

    return (
      <div className="App">
        <HeaderComponent />
        <InfoComponent />
        <FormComponent updateShowForm={(form) => this.setForm(form)} />
        <ShowFormComponent form={form} />
      </div>
    );
  }
}
