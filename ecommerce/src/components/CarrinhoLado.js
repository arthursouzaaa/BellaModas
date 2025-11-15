import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import ProdutosLado from "./ProdutosLado";
import { Link } from 'react-router-dom';

export default function CarrinhoLado({ isOpen, onClose, carrinho, onAtualizarCarrinho }) {
  const calcularTotal = () => {
    return carrinho.reduce((total, produto) => {
      return total + (produto.price * produto.quantidade);
    }, 0);
  };

  const atualizarQuantidade = (produtoId, novaQuantidade) => {
    const novoCarrinho = carrinho.map(produto => 
      produto.id === produtoId 
        ? { ...produto, quantidade: novaQuantidade }
        : produto
    );
    onAtualizarCarrinho(novoCarrinho);
  };

  const removerProduto = (produtoId) => {
    const novoCarrinho = carrinho.filter(produto => produto.id !== produtoId);
    onAtualizarCarrinho(novoCarrinho);
  };

  if (!isOpen) return null;

  const total = calcularTotal();
  const totalItens = carrinho.reduce((total, produto) => total + produto.quantidade, 0);

  return (
    <>
      <div className="cart-overlay active" onClick={onClose} />
      
      <aside className='sidebar-cart active'>
        <div className='top'>
          <h3>🛒 Meu Carrinho ({totalItens})</h3>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className='sidebar-products-list'>
          {carrinho.length === 0 ? (
            <div className="carrinho-vazio">
              <p>📦 Seu carrinho está vazio</p>
              <Link to="/produtos" onClick={onClose}>
                Continuar comprando
              </Link>
            </div>
          ) : (
            carrinho.map(produto => (
              <ProdutosLado 
                key={produto.id}
                produto={produto}
                onUpdateQuantity={atualizarQuantidade}
                onRemove={removerProduto}
              />
            ))
          )}
        </div>

        {carrinho.length > 0 && (
          <>
            <div className='total-container'>
              <b>Total: </b> 
              <span>R$ {total.toFixed(2)}</span>
            </div>

            <Link className="icon-btn" to="/cart/checkout" onClick={onClose}>
              <span className="btn-primary">💳 Pagar agora</span>
            </Link>
          </>
        )}
      </aside>
    </>
  );
}