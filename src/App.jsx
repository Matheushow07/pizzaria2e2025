import { useState } from "react"
import poke from './assets/pokeapi_256.png'

function App(){
   
    const [nome, setNome]= useState('Ronaldo')
  const [idade, setIdade] = useState (18)
  const [time, setTime] = useState (18)
  const [pi] = useState(3.14)
  
//var idade = 18;
//let time = 'Corinthians';
//const pi = 3.14;

   const Formulario = (props)=>{
    const[valor, setValor] = useState()

    return(
    <div>
  <input 
    placeholder={props.sombra}
    className="nome"
    onChange={(e)=>{setValor(e.target.value)}}
    type="text" />

    <button
    
    className="botao"
    onClick={()=>{
      if(valor.lenght > 0)
        alert(valor);
      else
      alert(props.nome + 'idade é ' + props.idade);
    }}
    >

      CLIQUE AQUI
    </button>
    </div>
    )
  }
  
  return (
    <div>
      <h3>Pizzaria 2E</h3>

    <img src={poke} style={{windht: 130}}/>

  <Formulario nome="Ricado "  
      idade = {45} 
   sombra="Digita nome.."/>   
  <Formulario nome="Maria" sombra="Digita sua idade.."/>
     <Formulario nome="Tomas" sombra="Digita seu time.."/>
      <Formulario nome="Antonieta" sombra="valor de pi.."/>
      

    </div>
  )
}

export default App