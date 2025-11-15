import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext'; 
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ListaProdutos from "./components/ListaProdutos";
import { useEffect, useState } from "react";
import ExclusiveSection from "./components/ExclusiveSection";
import Avaliacoes from "./components/Avaliacoes";
import Footer from "./components/Footer";
import CarrinhoLado from "./components/CarrinhoLado";
import Produtos from "./pages/Produtos";
import ProdutoDetalhes from "./pages/ProdutoDetalhes";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  const totalItensCarrinho = carrinho.reduce((total, produto) => {
    return total + produto.quantidade;
  }, 0);

  const adicionarAoCarrinho = (produto) => {
    const produtoExistente = carrinho.find(item => item.id === produto.id);
    
    if (produtoExistente) {
      const novoCarrinho = carrinho.map(item =>
        item.id === produto.id 
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
      setCarrinho(novoCarrinho);
    } else {
      const novoProduto = {
        id: produto.id,
        name: produto.name,
        image: produto.image,
        price: produto.price,
        quantidade: 1
      };
      setCarrinho([...carrinho, novoProduto]);
    }
    
    setCarrinhoAberto(true);
  };

  const atualizarCarrinho = (novoCarrinho) => {
    setCarrinho(novoCarrinho);
  };

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then((data) => setProdutos(data.products)); 
  }, [])

  return (
    <ThemeProvider> 
      <Router>
        <div className="App">
          <Navbar 
            onAbrirCarrinho={() => setCarrinhoAberto(true)} 
            totalItensCarrinho={totalItensCarrinho}
          />
          
          <Routes>
            <Route path="/" element={
              <main>
                <Header />
                <CarrinhoLado 
                  isOpen={carrinhoAberto} 
                  onClose={() => setCarrinhoAberto(false)}
                  carrinho={carrinho}
                  onAtualizarCarrinho={atualizarCarrinho}
                />
                <div className="page-inner-content">
                  <div className="section-title">
                    <h3>Produtos Selecionados</h3>
                    <div className="underline"></div>
                  </div>
                  <div className="main-content">
                    <ListaProdutos 
                      produtos={produtos} 
                      onAdicionarAoCarrinho={adicionarAoCarrinho}
                    />
                  </div>
                </div>
              </main>
            } />
            
            <Route path="/produtos" element={
              <Produtos 
                carrinho={carrinho}
                carrinhoAberto={carrinhoAberto}
                onAbrirCarrinho={() => setCarrinhoAberto(true)}
                onFecharCarrinho={() => setCarrinhoAberto(false)}
                onAdicionarAoCarrinho={adicionarAoCarrinho}
                onAtualizarCarrinho={atualizarCarrinho}
              />
            } />
            
            <Route path="/produto/:id" element={
              <ProdutoDetalhes 
                carrinho={carrinho}
                onAdicionarAoCarrinho={adicionarAoCarrinho}
                carrinhoAberto={carrinhoAberto}           
                onAbrirCarrinho={() => setCarrinhoAberto(true)} 
                onFecharCarrinho={() => setCarrinhoAberto(false)} 
                onAtualizarCarrinho={atualizarCarrinho}   
              />
              } />
          </Routes>

          <ExclusiveSection />
          <Avaliacoes />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;