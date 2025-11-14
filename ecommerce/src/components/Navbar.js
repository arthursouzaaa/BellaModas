import React from 'react';
import { faBars, faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ onAbrirCarrinho, totalItensCarrinho }) {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
      <div className="inner-content">
        <Link to="/" className="logo">
          BELLA<span>MODAS</span>
        </Link>

        <ul className={show ? "active" : ""}>
          <li>
            <Link to="/" onClick={() => setShow(false)}>Home</Link>
          </li>
          <li>
            <Link to="/produtos" onClick={() => setShow(false)}>Produtos</Link>
          </li>
          <li>
            <Link to="/sobre" onClick={() => setShow(false)}>Sobre</Link>
          </li>
          <li>
            <Link to="https://wa.me/5581997272147" onClick={() => setShow(false)}>Contato</Link>
          </li>
        </ul>

        <div className="navs-icon-container">
          <div className="search-input-container">
            <input type="search" placeholder="Procurar peça" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          
          <Link to="/conta" className="user-icon">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          
          <button className="shopping-cart" onClick={onAbrirCarrinho}>
            <FontAwesomeIcon icon={faShoppingCart} />
            {totalItensCarrinho > 0 && (
              <div className="products-count">{totalItensCarrinho}</div>
            )}
          </button>
          
          <button className="menu-button" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
}