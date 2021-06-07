import React from 'react';
import JobData from './JobData'
import Formulario from './Formulario.js'

const states = [
  'AC - Acre',
  'AL - Alagoas',
  'AP - Amapá',
  'AM - Amazonas',
  'BA - Bahia',
  'CE - Ceará',
  'DF - Distrito Federal',
  'ES - Espírito Santo',
  'GO - Goías',
  'MA - Maranhão',
  'MT - Mato Grosso',
  'MS - Mato Grosso do Sul',
  'MG - Minas Gerais',
  'PA - Pará',
  'PB - Paraíba',
  'PR - Paraná',
  'PE - Pernambuco',
  'PI - Piauí',
  'RJ - Rio de Janeiro',
  'RN - Rio Grande do Norte',
  'RS - Rio Grande do Sul',
  'RO - Rondônia',
  'RR - Roraíma',
  'SC - Santa Catarina',
  'SP - São Paulo',
  'SE - Sergipe',
  'TO - Tocantins'
  ];

class PersonalData extends React.Component {
  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      name: '',
      email:'',
      cpf: '',
      adress: '',
      city: '',
      state:'',
      type: '',
      resume:'',
      job: '',
      jobDescription:'',
    }
  }
handleChange({ target }) {
      let { name , type, checked, value } = target;
      let entry = type === 'checkbox' ? checked : value;

      if (name === 'endereço') {
        entry = value.replace(/[^a-zA-Z0-9\s]/,'');
        document.getElementById('endereço').value = entry;
      }
    
      this.setState({
        [name]: entry,
      });


    }
    nomeCidade = ({ target }) => {
      let { name, value } = target;
      if ((value[0] <= '9') && (value[0] >= '0')) {
        value = '';        
        document.getElementById('city').value='';
        this.setState({
          [name]: '',
        });
      }
    }

    limparFormulario = () =>{
      window.location.reload();
    }
  render() {
    return (
      <div className="container">
      <fieldset>
        <label for="name">Nome:
          <input type="text" style={{textTransform: 'uppercase'}} name="name" onChange={this.handleChange} maxLength='40' required/>
        </label>
        <label for="email">Email:
          <input type="email"name="email" onChange={this.handleChange} maxLength='50' required/>
        </label>
        <label for="cpf">CPF:
          <input type="text" name="cpf" onChange={this.handleChange} maxLength='11' required/>
        </label>
        <label for="adress">Endereço:
          <input id="adress" type="text" name="adress" onChange={this.handleChange}  maxLength='200' required/>
        </label>
        <label for="city">Cidade:
          <input id="city" type="text" name="city" onChange={this.handleChange} onBlur={this.nomeCidade} maxLength='28' required/>
        </label>
        <label for="state">Estado:
          <select name="state" onChange={this.handleChange}>
            <option>
              selecione
            </option>
            {
              states.map((estado, index) => (
                <option key={index}> {estado} </option> 
              ))
            }
          </select>
        </label>
        <label for="house" >Casa
          <input type="radio" name="type" value="house" onChange={this.handleChange} required/> 
        </label>
        <label for="apt" >Apartamento
          <input type="radio" name="type" value="apt" onChange={this.handleChange}/>
        </label>
      </fieldset>
      <JobData handleChange={this.handleChange}/>
      <Formulario dados={this.state}/>
      <button onClick={this.limparFormulario}> Reset </button>
      </div>
    );
  }
}

export default PersonalData;