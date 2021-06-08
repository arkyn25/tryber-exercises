import React from 'react';

class Formulario extends React.Component {
   showForms = () => {
      document.getElementById('forms').style.display="flex";
      document.getElementById('forms').style.flexDirection="column";
      
    }
    
    render() {  
      const  { name, email, cpf, adress, city, state, type, resume, job, jobDescription } = this.props.dados;
    return (
    <div>
      <button onClick={this.showForms}> Send </button>
      <div className="forms">
        <div>Nome: { name }</div>
        <div>Email: { email }</div>
        <div>CPF: { cpf }</div>
        <div>Endereço: { adress }</div>
        <div>{ city }</div>
        <div>{ state }</div>
        <div>{ type }</div> 
        <div>Resumo do Curriculo: { resume }</div>
        <div>Cargo: { job } </div>
        <div>Descricao: { jobDescription }</div>
      </div>
    </div>
    );
  }
}

export default Formulario;