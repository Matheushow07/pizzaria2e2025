// ferramenta de consumo de rotas
import axios from 'axios'
// Hooks do react para controlar renderizaçao e estados
import { useEffect, useState } from 'react';
 
const Produtos = () => {
    // Estadi para guardar a lista de pizzas
    const [pizzas,setPizzas] = useState(['Calabresa', 'Muçarela', 'Baina']);
    //Consumir as pizzas da rota backend
    axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
    .then(Response => setPizzas(Response.data.data))
    .catch(error => console.log(error))
    
    // Mapeamento das pizzas da lista (iteração)
    const listaPizzas = pizzas.map(pizza =>
        <li key={pizza.id}>{pizza.nome}</li>);
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