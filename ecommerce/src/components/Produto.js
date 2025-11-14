import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Produto({ produto, onAdicionarAoCarrinho }) {
  const handleAdicionarCarrinho = () => {
    onAdicionarAoCarrinho(produto);
  };

  const renderEstrelas = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="product">
      <Link to={`/produto/${produto.id}`}>
        <img src={produto.image} alt={produto.name} />
      </Link>
      
      <Link to={`/produto/${produto.id}`} className="product-link">
        <h3 className="name">{produto.name}</h3>
      </Link>
      
      <p className="price">R$ {produto.price.toFixed(2)}</p>
      <div className="rate">{renderEstrelas(produto.rating)}</div>
      
      <div className="botoes">
        <Link to={`/produto/${produto.id}`} className="view-btn">
          <FontAwesomeIcon icon={faEye} />
          Ver Detalhes
        </Link>
        
        <button 
          className="add-to-card-btn"
          onClick={handleAdicionarCarrinho}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          Adicionar
        </button>
      </div>
    </div>
  );
}