import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function ProdutosLado({ produto, onUpdateQuantity, onRemove }) {
  const [quantidade, setQuantidade] = useState(produto.quantidade || 1);

  const aumentarQuantidade = () => {
    const novaQuantidade = quantidade + 1;
    setQuantidade(novaQuantidade);
    onUpdateQuantity(produto.id, novaQuantidade);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      const novaQuantidade = quantidade - 1;
      setQuantidade(novaQuantidade);
      onUpdateQuantity(produto.id, novaQuantidade);
    }
  };

  const precoTotal = produto.price * quantidade;

  return (
    <div className='sidebar-product'>
      <div className="left-side">
        <button className='removeproduct-btn' onClick={() => onRemove(produto.id)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <img 
          src={produto.image} 
          alt={produto.name} 
          className="product-image"
        />
      </div>

      <div className="details">
        <h4>{produto.name}</h4>
        <p className="price-unit">R$ {produto.price.toFixed(2)}</p>
        
        <div className="quantity-controls">
          <button 
            className="quantity-btn" 
            onClick={diminuirQuantidade}
            disabled={quantidade === 1}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          
          <span className="quantity-number">{quantidade}</span>
          
          <button className="quantity-btn" onClick={aumentarQuantidade}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="total-price">
          <small>Subtotal: </small>
          <strong>R$ {precoTotal.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}