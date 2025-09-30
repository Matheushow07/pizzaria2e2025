// ferramenta de consumo de rotas
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useProdutos } from '../../context/ProdutosContext';
 
const Produtos = () => {
    const [pizzas,setPizzas] = useState([]);
    const { reload } = useProdutos();
    
    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get("/api/v1/produto");
                const produtos = response.data?.data || response.data || [];
                setPizzas(produtos);
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
                setPizzas([]);
            }
        };
        
        fetchProdutos();
    }, [reload]);
    
    const listaPizzas = pizzas.map((pizza, index) =>
        <li key={pizza.id || index}>{pizza.nome || pizza}</li>);
    return(
    <>
        <h3>Listagem de Produtos</h3>
        <p>Total de produtos: {pizzas.length}</p>
        {pizzas.length === 0 ? (
            <p>Nenhum produto encontrado</p>
        ) : (
            <ul>
                {listaPizzas}
            </ul>
        )}
    </>
    )
}
export default Produtos