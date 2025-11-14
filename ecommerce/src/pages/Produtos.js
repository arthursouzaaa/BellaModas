import React, { useState, useEffect } from 'react';
import ListaProdutos from '../components/ListaProdutos';
import Filtros from '../components/Filtros';
import CarrinhoLado from '../components/CarrinhoLado';

export default function Produtos({ 
  carrinho, 
  carrinhoAberto, 
  onAbrirCarrinho, 
  onFecharCarrinho, 
  onAdicionarAoCarrinho, 
  onAtualizarCarrinho 
}) {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtrosAtivos, setFiltrosAtivos] = useState(false);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then((data) => {
        setProdutos(data.products);
        setProdutosFiltrados(data.products);
        setLoading(false);
      });
  }, []);

  const handleFiltrar = (produtosFiltrados, temFiltros) => {
    setProdutosFiltrados(produtosFiltrados);
    setFiltrosAtivos(temFiltros);
  };

  const handleLimparFiltros = () => {
    setProdutosFiltrados(produtos);
    setFiltrosAtivos(false);
  };

  if (loading) {
    return (
      <div className="pagina-produtos">
        <div className="loading">Carregando produtos...</div>
      </div>
    );
  }

  return (
    <div className="pagina-produtos">
      <div className="page-inner-content">
        <div className="section-title">
          <h1>Nossa Coleção</h1>
          <p>Descubra peças exclusivas para cada momento</p>
          <div className="underline"></div>
        </div>

        <Filtros 
          produtos={produtos}
          onFiltrar={handleFiltrar}
          onLimparFiltros={handleLimparFiltros}
          filtrosAtivos={filtrosAtivos}
        />

        <CarrinhoLado 
          isOpen={carrinhoAberto} 
          onClose={onFecharCarrinho}
          carrinho={carrinho}
          onAtualizarCarrinho={onAtualizarCarrinho}
        />

        <div className="produtos-header">
          <div className="resultados-info">
            <span className="quantidade-produtos">
              {produtosFiltrados.length} {produtosFiltrados.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
            </span>
            {filtrosAtivos && (
              <button className="btn-limpar-todos" onClick={handleLimparFiltros}>
                Limpar todos os filtros
              </button>
            )}
          </div>
        </div>

        {produtosFiltrados.length === 0 ? (
          <div className="produtos-vazios">
            <h3>Nenhum produto encontrado</h3>
            <p>Tente ajustar os filtros para ver mais resultados</p>
            <button className="btn-limpar-filtros-grande" onClick={handleLimparFiltros}>
              Limpar Filtros
            </button>
          </div>
        ) : (
          <ListaProdutos 
            produtos={produtosFiltrados} 
            onAdicionarAoCarrinho={onAdicionarAoCarrinho}
          />
        )}
      </div>
    </div>
  );
}