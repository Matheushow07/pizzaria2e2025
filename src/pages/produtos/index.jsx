import axios from 'axios'
import { useEffect, useState } from 'react';
 
const Produtos = () => {
    const [pizzas, setPizzas] = useState([])
 
    axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
    .then(response=>setPizzas(response.data.data))
 
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