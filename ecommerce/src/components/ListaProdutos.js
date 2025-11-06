import React from 'react'
import Produto from './Produto';

export default function ListaProdutos({ produtos }) {
  return (
    <div className="listaprodutos">
      {produtos && produtos.map((produto) => (
        <Produto key={produto.id} {...produto} />
      ))}
    </div>
  );
}