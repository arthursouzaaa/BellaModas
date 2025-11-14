import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faStar, faArrowLeft, faShare } from '@fortawesome/free-solid-svg-icons';

export default function ProdutoDetalhes({ carrinho, onAdicionarAoCarrinho }) {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantidade, setQuantidade] = useState(1);
  const [produtosRelacionados, setProdutosRelacionados] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then((data) => {
        const produtoEncontrado = data.products.find(p => p.id === parseInt(id));
        setProduto(produtoEncontrado);
        
        const relacionados = data.products
          .filter(p => p.id !== parseInt(id))
          .slice(0, 4);
        setProdutosRelacionados(relacionados);
        
        setLoading(false);
      });
  }, [id]);

  const handleAdicionarCarrinho = () => {
    for (let i = 0; i < quantidade; i++) {
      onAdicionarAoCarrinho(produto);
    }
  };

  const renderEstrelas = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  if (loading) {
    return (
      <div className="pagina-produto-detalhes">
        <div className="loading">Carregando produto...</div>
      </div>
    );
  }

  if (!produto) {
    return (
      <div className="pagina-produto-detalhes">
        <div className="produto-nao-encontrado">
          <h2>Produto não encontrado</h2>
          <p>Desculpe, o produto que você está procurando não existe.</p>
          <Link to="/produtos" className="btn-voltar">
            Voltar para a loja
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pagina-produto-detalhes">
      <div className="page-inner-content">
        {/* Navegação */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/produtos">Produtos</Link>
          <span> / </span>
          <span>{produto.name}</span>
        </nav>

        {/* Produto Principal */}
        <div className="produto-detalhes-container">
          <div className="produto-galeria">
            <div className="imagem-principal">
              <img src={produto.image} alt={produto.name} />
            </div>
          </div>

          <div className="produto-info">
            <h1>{produto.name}</h1>
            
            <div className="produto-rating">
              <div className="estrelas">
                {renderEstrelas(produto.rating)}
              </div>
              <span className="avaliacao-texto">({produto.rating} avaliações)</span>
            </div>

            <div className="produto-preco">
              <span className="preco-atual">R$ {produto.price.toFixed(2)}</span>
              <span className="parcelamento">ou 3x de R$ {(produto.price / 3).toFixed(2)} sem juros</span>
            </div>

            <div className="produto-descricao">
              <p>
                Versátil e sofisticado, este produto foi desenvolvido para a mulher comtemporânea que transita entre compromissos com elegância. Com tecido de alta performance e modelagem que adapta-se perfeitamente ao corpo, é ideal tanto para o dia a dia quanto para ocasiões especiais.
              </p>
            </div>

            <div className="produto-opcoes">
              <div className="quantidade-selector">
                <label>Quantidade:</label>
                <div className="quantidade-controles">
                  <button 
                    onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                    disabled={quantidade === 1}
                  >
                    -
                  </button>
                  <span>{quantidade}</span>
                  <button onClick={() => setQuantidade(quantidade + 1)}>
                    +
                  </button>
                </div>
              </div>

              <div className="botoes-acao">
                <button 
                  className="btn-adicionar-carrinho"
                  onClick={handleAdicionarCarrinho}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Adicionar ao Carrinho
                </button>
                
                <button className="btn-favoritar">
                  <FontAwesomeIcon icon={faHeart} />
                  Favoritar
                </button>
              </div>
            </div>

            <div className="produto-detalhes-tecnicos">
              <h3>📋 Detalhes do Produto</h3>
              <ul>
                <li><strong>Material:</strong> 95% Viscose, 5% Elastano</li>
                <li><strong>Composição:</strong> Tecido de alta qualidade</li>
                <li><strong>Lavagem:</strong> Lavável à máquina</li>
                <li><strong>Origem:</strong> Nacional</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Produtos Relacionados */}
        {produtosRelacionados.length > 0 && (
          <section className="produtos-relacionados">
            <h2>Você também pode gostar</h2>
            <div className="listaprodutos">
              {produtosRelacionados.map(produtoRel => (
                <div key={produtoRel.id} className="product">
                  <Link to={`/produto/${produtoRel.id}`}>
                    <img src={produtoRel.image} alt={produtoRel.name} />
                  </Link>
                  <h3 className="name">{produtoRel.name}</h3>
                  <p className="price">R$ {produtoRel.price.toFixed(2)}</p>
                  <div className="rate">{renderEstrelas(produtoRel.rating)}</div>
                  <div className="botoes">
                    <Link to={`/produto/${produtoRel.id}`} className="view-btn">
                      Ver Detalhes
                    </Link>
                    <button 
                      className="add-to-card-btn"
                      onClick={() => onAdicionarAoCarrinho(produtoRel)}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} />
                      Adicionar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}