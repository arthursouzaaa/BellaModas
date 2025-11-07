import React from 'react';
import { Link } from 'react-router-dom';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ExclusiveSection() {
  return (
    <div className='exclusive-section'>
      <div className='page-inner-content'>
        <div className='left-side'>
          <div className='content'>
            <h2>Body Manga Longa + Saia Crepe</h2>
            <p>
              O Body de Manga Longa em viscose oferece conforto e elegância, com caimento perfeito que valoriza sua silhueta. Combinado com a Saia em Crepe fluído, cria um visual sofisticado e versátil.
            </p>
            <Link className="vejamais-btn" to="/produtos">
              <span className="btn-primary">Ver Mais</span>
              <FontAwesomeIcon icon={faChevronRight} /> 
            </Link>
          </div>
        </div>

        <div className='right-side'>
          <img src='/images/assets/FotoModelo2.png' alt='Conjunto Body Manga Longa + Saia Crepe'/> 
        </div>
      </div>
    </div>
  );
}