// Footer.js

import React from "react";
import "../components/Footer.css";
import mscard from "../assets/mastercard.png";
import visa from "../assets/visa.png";
import opt from "../assets/optima.png";
import mbank from "../assets/mbank.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="link-group">
          <h3>Связь с нами</h3>
          <ul>
            <li>Телефон: +996 502111100</li>
            <li>Email: info@asiastore.com</li>
          </ul>
        </div>

        <div className="link-group">
          <h3>Категории</h3>
          <ul>
            <li>Товары</li>
            <li>Бренды</li>
            <li>Предложения</li>
          </ul>
        </div>

        <div className="link-group">
          <h3>О компании</h3>
          <ul>
            <li>О нас</li>
            <li>Контакты</li>
            <li>Локации</li>
          </ul>
        </div>

        <div className="link-group">
          <h3>Полезные ссылки</h3>
          <ul>
            <li>Каталог</li>
            <li>Контактная информация</li>
          </ul>
        </div>

        <div className="link-group">
          <h3>Клиентам</h3>
          <ul>
            <li>Для корпоративных клиентов</li>
            <li>Для образования</li>
            <li>Сертификаты</li>
          </ul>
        </div>
      </div>

      <div className="footer-images">
        <img src={mscard} alt="MasterCard" />
        <img src={visa} alt="Visa" />
        <img src={opt} alt="Optima" />
        <img src={mbank} alt="MBank" />
      </div>
    </footer>
  );
};

export default Footer;


