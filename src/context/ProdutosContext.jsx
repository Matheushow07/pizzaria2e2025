import { createContext, useContext, useState } from 'react';

const ProdutosContext = createContext();

export const useProdutos = () => {
  const context = useContext(ProdutosContext);
  if (!context) {
    throw new Error('useProdutos deve ser usado dentro de ProdutosProvider');
  }
  return context;
};

export const ProdutosProvider = ({ children }) => {
  const [reload, setReload] = useState(0);

  const recarregarProdutos = () => {
    setReload(prev => prev + 1);
  };

  return (
    <ProdutosContext.Provider value={{ 
      reload, 
      recarregarProdutos 
    }}>
      {children}
    </ProdutosContext.Provider>
  );
};