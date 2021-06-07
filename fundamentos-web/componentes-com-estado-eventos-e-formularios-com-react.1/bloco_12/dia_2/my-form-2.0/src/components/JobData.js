import React from 'react';

class JobData extends React.Component {
  constructor() {
    super();
    this.state = {
      contagem:0
    }
  }

  alertMessage = () =>{
    const { contagem } = this.state;
    if (contagem === 0) { alert('Preencha com cuidado esta informação.') };
    this.setState((prev)=> ({contagem: prev.contagem +1}));
  }

  render(){    
    const { handleChange } = this.props;
    return (
    <fieldset>
      <label for="resume">Resumo do Currículo:
        <textarea type="text" name="resume" onChange={handleChange} maxLength='1000' required/>
      </label>
      <label for="job">Cargo:
        <textarea type="text" name="job" onChange={handleChange} onMouseEnter={this.alertMessage} maxLength='40' required/>
      </label>
      <label for="jobDescription">Descrição do Cargo:
        <input type="text" name="jobDescription" onChange={handleChange} maxLength='500' required/>
      </label>
    </fieldset>
      );
  }
}

export default JobData;