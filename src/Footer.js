import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <foooter className="footer">
      {/* 
                Repository
                GitHub personal
                LinkedIn
                Portfolio

                WHO
                API COVID
                Coronavirus WHO

		React
		Leaflet
                CRA

                My email
            
            */}
      <div className="footer__section">
        <h2 className="footer__section-title">COVID-19 information</h2>
        <ul className="footer__section-links">
          <li>World Health Organization</li>
          <li>COVID-19 API</li>
          <li>Coronavirus (WHO)</li>
        </ul>
      </div>
      <div className="footer__section">
        <h2 className="footer__section-title">Web tools used</h2>
        <ul className="footer__section-links">
          <li>React</li>
          <li>Leaflet</li>
          <li>CRA template</li>
        </ul>
      </div>
      <div className="footer__section">
        <h2 className="footer__section-title">Contact</h2>
        <ul className="footer__section-links">
          <li>mail.marcelo.as@gmail.com</li>
        </ul>
      </div>
      <div className="footer__section">
        <h2 className="footer__section-title">Development</h2>
        <ul className="footer__section-links">
          <li>
            <a
              href="https://github.com/360macky/manzana/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Licencia
            </a>
          </li>
          <li>
            <a
              href="https://github.com/360macky/manzana"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio
            </a>
          </li>
          <li>
            <a
              href="https://github.com/360macky/manzana/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribuidores
            </a>
          </li>
          <li>
            <a
              href="https://marceloarias.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Marcelo Arias portfolio"
            >
              Autor original
            </a>
          </li>
        </ul>
      </div>
    </foooter>
  );
}
