import Produtos from "./pages/produtos"
import CadastroProdutos from "./pages/produtos/cadastro"
import { ProdutosProvider } from "./context/ProdutosContext"
 
const App = () => {
 
  return (
    <ProdutosProvider>
      <div>
        <h1>Projeto Pizzaria</h1>
        <CadastroProdutos/>
        <Produtos />
      </div>
    </ProdutosProvider>
  )
}
 
export default App