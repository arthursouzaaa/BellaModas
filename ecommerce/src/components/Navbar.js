import React from 'react';
import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
      <div className="inner-content">
        <h1 className="logo">
          BELLA<span>MODAS</span>
        </h1>

        <ul className={show ? "active" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/conta">Conta</Link>
          </li>
        </ul>
        <div className="navs-icon-container">
          <div className="search-input-container">
            <input type="search" placeholder="Procurar peça" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <button className="shopping-cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="products-count">15</div>
          </button>
          <button className="menu-button" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
}