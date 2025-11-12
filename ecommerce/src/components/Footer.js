import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram, 
  faFacebook, 
  faWhatsapp,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h3 className="footer-logo">BELLA<span>MODAS</span></h3>
          <p className="footer-about">
            Há mais de 14 anos levando elegância e qualidade para mulheres que valorizam 
            seu estilo único. Da nossa loja física para o seu closet digital.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/bellamodasre" className="social-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61550256052420" className="social-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://wa.me/5581997272147" className="social-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/conta">Minha Conta</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categorias</h4>
          <ul className="footer-links">
            <li><Link to="/produtos/vestidos">Vestidos</Link></li>
            <li><Link to="/produtos/blusas">Blusas</Link></li>
            <li><Link to="/produtos/calcas">Calças</Link></li>
            <li><Link to="/produtos/saias">Saias</Link></li>
            <li><Link to="/produtos/conjuntos">Conjuntos</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <div className="contact-info">
            <div className="contact-item">
              <Link to="https://www.google.com/maps/@-8.043977,-34.9473817,3a,75y,108.73h,105.14t/data=!3m7!1e1!3m5!1sg5N2rPVO5qIfIAPTuP_R0w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-15.144514659158602%26panoid%3Dg5N2rPVO5qIfIAPTuP_R0w%26yaw%3D108.72542989356052!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D"> 
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </Link>
              <span>Av. General Polidorio, 777 - CDU</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>(81) 99501-7989</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>bellamodas@gmail.com</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>(81) 99727-2147</span>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 Bella Modas. Todos os direitos reservados.</p>
          <p className="developer-credit">
            Desenvolvido por <strong>arthursouzaaa.dev</strong>
            <a href="https://github.com/arthursouzaaa" target="_blank" rel="noopener noreferrer" className="dev-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://wa.me/5581998435172" target="_blank" rel="noopener noreferrer" className="dev-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </p>
          <div className="footer-policies">
            <Link to="/politica-privacidade">Política de Privacidade</Link>
            <Link to="/termos-uso">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}