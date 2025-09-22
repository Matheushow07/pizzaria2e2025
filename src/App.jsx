import Produtos from "./pages/produtos"
import CadastroProdutos from "./pages/produtos/cadastro"
 
const App = () => {
 
  return (
    <div>
      <h1>Projeto Pizzaria</h1>
      <CadastroProdutos/>
      <Produtos />
    </div>
  )
}
 
export default App