import React, { Component } from 'react';
import PersonalData from './PersonalData'
import JobData from './JobData'

class Forms extends Component {
  render() {
    const { sendForm, resetForm, changeHandler } = this.props;

    return (
      <form>
        <PersonalData
          changeHandler={ changeHandler }
        />
        <JobData changeHandler={ changeHandler } />
        <input
            type="button"
            onClick={ sendForm }
            value="Enviar"
        />
        <input
          type="reset"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
}

export default Forms;