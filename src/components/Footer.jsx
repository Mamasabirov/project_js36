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
            <li className="cat-1">Товары</li>
            <li className="cat-2">Бренды</li>
            <li className="cat-3">Предложения</li>
          </ul>
        </div>

        <div className="link-group">
          <h3>О компании</h3>
          <ul>
            <li>
              <a className="link-1" href="/aboutus">
                О нас
              </a>
            </li>
            <li>
              {" "}
              <a className="link-2" href="contact">
                Контакты
              </a>{" "}
            </li>
            <li className="link-3">Локации</li>
          </ul>
        </div>

        <div className="link-group">
          <h3>Полезные ссылки</h3>
          <ul>
            <li ><a className="link-4" href="/products">Каталог</a></li>
            <li ><a className="link-5" href="/contact">Контактная информация</a></li>
          </ul>
        </div>

        <div className="link-group">
          <h3>Клиентам</h3>
          <ul>
            <li className="link-6">Для корпоративных клиентов</li>
            <li className="link-7">Для образования</li>
            <li className="link-8">Сертификаты</li>
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
