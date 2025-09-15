import axios, {app} from 'axios'
import { useEffect, useState } from 'react';

const Produtos = () => {
   
    axios.get('http://172.19.0.49/pizzariaoficial/api/v1/produto')
    .then((response)=>{
        alert(JSON.stringify(response.data))

    })

   // Consumir os produtos endpoint (rota)
   useEffect = (() => {

}, []);

    //Objeto que possui lista de pizzas
   const pizzas = [
        "Pizza de Frango",
        "Pizza de Muçarela",
        "Pizza de Calabresa",
        "Pizza Baiana",
        "Pizza Portuguesa",
        "Pizza de Atum", "Pizza de Seis Queijos",

   ];
   //Mapeamento das pizzas da lista (literação)
   const listaPizzas = pizzas.map(pizza => <li>{pizza}</li>);
    return(
    <>
        <h3>Listagem de Produtos</h3>
        <ul>
            {listaPizzas}
        </ul>
    </>
    )
}
 
export default Produtos