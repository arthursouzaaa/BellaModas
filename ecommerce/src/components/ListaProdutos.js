import React from 'react';
import Produto from './Produto';

export default function ListaProdutos({ produtos, onAdicionarAoCarrinho }) {
  return (
    <div className="listaprodutos">
      {produtos.map((produto) => (
        <Produto 
          key={produto.id} 
          produto={produto}
          onAdicionarAoCarrinho={onAdicionarAoCarrinho}
        />
      ))}
    </div>
  );
}