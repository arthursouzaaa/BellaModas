import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";


export default function Header() {
  return <header>
    <div className="inner-content">
      <div className="canto-esquerdo">
        <h2>
          Eleve seu estilo, expresse sua essência!
        </h2>
        <p>
          Descubra peças que revelam sua essência. Na Bella Modas, cada detalhe é pensado para celebrar a mulher única que você é, transformando momentos comuns em experiências extraordinárias.
        </p>
        <Link  className="vejamais-btn" to="/produtos">
          <span className="btn-primary">Ver Mais</span>
          <FontAwesomeIcon icon={faChevronRight} /> 
        </Link>
      </div>
      <div className="canto-direito">
        <img src="/images/assets/FotoModelo.png" alt='Vestuário da Bella' />
      </div>
    </div>
  </header>;
}