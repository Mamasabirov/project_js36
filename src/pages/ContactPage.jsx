// ContactPage.js

import React from 'react';
import autor from "../assets/authorised.jpg";
import "./ContactPage.css"; // Create a CSS file for ContactPage styling

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <img className="autor-image" src={autor} alt="Authorized Partner" />

      <div className="content-container">
        <h2 className="page-title">
          Asia Store – первый официальный авторизованный партнёр Apple в
          Кыргызстане со статусом Apple Authorised Reseller.
        </h2>

        <button className="btn">Контактная информация</button>

        <div className="paragraph-container">
          <p className="page-paragraph">
            В нашем магазине можно не только купить iPhone, компьютер Mac или
            планшет iPad, а также другую технику Apple и аксессуары для неё.
            Asia Store – это место, в котором вам помогут с выбором техники,
            научат ей пользоваться, дадут советы по эксплуатации ваших гаджетов
            и предложат качественные аксессуары.
          </p>

          <p className="page-paragraph">
            Наш магазин является единственным авторизованным реселлером Apple и
            Garmin в Кыргызстане, а также официальным дистрибьютором JBL &
            Harman Kardon и умных устройств от Yandex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

