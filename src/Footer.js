import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <foooter className="footer">
      <div className="footer__section">
        <h2 className="footer__section-title">COVID-19 information</h2>
        <ul className="footer__section-links">
          <li>
            <a href="https://www.who.int/en">
              World Health Organization
            </a>
          </li>
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
          <li>
            <a href="mailto:mail.marcelo.as@gmail.com">
              Email
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__section">
        <h2 className="footer__section-title">Development</h2>
        <ul className="footer__section-links">
          <li>
            <a
              href="https://github.com/360macky/COVID19-Tracker/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              License
            </a>
          </li>
          <li>
            <a
              href="https://github.com/360macky/COVID19-Tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </li>
          <li>
            <a
              href="https://github.com/360macky/COVID19-Tracker/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contributors
            </a>
          </li>
          <li>
            <a
              href="https://portfolio.marceloarias.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Marcelo Arias portfolio"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </foooter>
  );
}
