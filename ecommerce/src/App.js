import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
    <div className="nav">
      <div className="inner-content">
        <nav>
        <h1 className="logo">
        BELLA<span>MODAS</span>
      </h1>
        <ul>
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
        <button className="menu-button">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      </nav>
      </div>
    </div>
  </div>
  </Router>
  );
}

export default App;