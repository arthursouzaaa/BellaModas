import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Produto({id, image, name, rate, price}) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="rate">⭐⭐⭐⭐⭐</p>
      <p className="price">R$ {price}</p>

      <div className="botoes">
        <Link to="/produtos/123/checkout">
        <span>Comprar Agora</span>
        <FontAwesomeIcon icon={faMoneyBill} />
        </Link>
        <button className="btn-icon add-to-card-btn">
          <span>Adicionar ao Carrinho</span>
        <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  )
}