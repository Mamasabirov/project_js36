import React from "react";
import autor from "../assets/authorised.jpg";
import "../components/Footer.css";
import mscard from "../assets/mastercard.png";
import visa from "../assets/visa.png";
import opt from "../assets/optima.png";
import mbank from "../assets/mbank.png";
import "../components/adaptive.css";
const Footer = () => {
  return (
    <div
      className="footer-container"
      style={{
        backgroundColor: "#101010",
        height: "100rem",
        margin: "auto",
        display: "flex",
        textAlign: "center",
        position: "relative",
      }}
    >
      <img
        className="autor-image"
        style={{
          position: "absolute",
          margin: "0 211px -30px",
          width: "398px",
          height: "310px",
          margin: " auto",
          marginTop: "80px",
          left: "38%",
        }}
        src={autor}
      />
      <div className="content-container">
        <h2
          className="main-title"
          style={{
            position: "absolute",
            color: "#fff",
            lineHeight: "50px",
            fontSize: "40px",
            fontWeight: "500",
            width: "725px",
            left: "28%",
            top: "24%",
          }}
        >
          Asia Store – первый официальный авторизованный партнёр Apple в
          Кыргызстане со статусом Apple Authorised Reseller.
        </h2>
      </div>
      <div>
        <button
          className="btn"
          style={{
            color: "#f0f0f0",
            display: "inline-block",
            padding: "8px 20px",
            border: "2px solid rgba(255,255,255,0.5)",

            borderRadius: "25px",
            fontSize: "20px",
            textDecoration: "none",
            marginTop: "40rem",
            marginLeft: "40rem",
            backgroundColor: "#101010",
            cursor: "pointer",
          }}
        >
          Контактная информация
        </button>
      </div>

      <p
        className="footer-text"
        style={{
          color: "rgba(255,255,255,0.4);",
          maxWidth: "390px",
          color: "#efeeed",
          position: "absolute",
          top: "47%",
          left: "19%",
        }}
      >
        В нашем магазине можно не только купить iPhone, компьютер Mac или
        планшет iPad, а также другую технику Apple и аксессуары для неё. Asia
        Store – это место, в котором вам помогут с выбором техники, научат ей
        пользоваться, дадут советы по эксплуатации ваших гаджетов и предложат
        качественные аксессуары.
      </p>
      <p
        className="footer-text"
        style={{
          color: "#efeeed",
          position: "absolute",
          maxWidth: "390px",
          top: "47%",
          left: "52%",
        }}
      >
        Наш магазин является единственным авторизованным реселлером Apple и
        Garmin в Кыргызстане, а также официальным дистрибьютором JBL & Harman
        Kardon и умных устройств от Yandex.
      </p>
      <div className="contact-info">
        <ul
          style={{
            color: "#5D5D63",
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            listStyleType: "none",
            gap: "14.1875rem",
            top: "69%",
            right: "5%",
          }}
        >
          <li>Связь с нами </li>
          <li>Товары</li>
          <li>Бренды</li>
          <li>Информация</li>
          <li>Предложения</li>
        </ul>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            listStyleType: "none",
            color: "#9C9D9E",
            gap: "1rem",
            top: "71%",
            right: "87%",
          }}
        >
          <li>O!</li>
          <li>Beeline</li>
          <li>Mega</li>
        </ul>
        <ul
          style={{
            display: "block",
            position: "absolute",
            listStyleType: "none",
            color: "#fff",
            top: "74%",
            right: "88%",
            lineHeight: "2rem",
          }}
        >
          <li>+996 502 111100</li>
          <li>+996 220 011111</li>
          <li>+996 554 111000</li>
        </ul>
        <ul
          style={{
            display: "block",
            position: "absolute",
            listStyleType: "none",
            color: "#CCCCCC",
            top: "71%",
            right: "70%",
            lineHeight: "2.5rem",
          }}
        >
          <li>Iphone</li>
          <li>Mac</li>
          <li>Ipad</li>
          <li>Watch</li>
        </ul>
        <ul
          style={{
            display: "block",
            position: "absolute",
            listStyleType: "none",
            color: "#CCCCCC",
            lineHeight: "2rem",
            top: "71%",
            right: "50%",
          }}
        >
          <li>Garmin</li>
          <li>Яндекс</li>
          <li>JBL</li>
          <li>Marshall</li>
        </ul>
        <ul
          style={{
            display: "block",
            position: "absolute",
            listStyleType: "none",
            color: "#CCCCCC",
            top: "71%",
            right: "24%",
            lineHeight: "2rem",
          }}
        >
          <li>Каталог</li>
          <li>Контактная информация</li>
        </ul>
        <ul
          style={{
            display: "block",
            position: "absolute",
            listStyleType: "none",
            color: "#CCCCCC",
            lineHeight: "2rem",
            top: "71%",
            left: "80%",
          }}
        >
          <li>Для корпорпоративных клиентов</li>
          <li>Для образования</li>
          <li>Сертификаты</li>
        </ul>
      </div>
      <div className="copyright" style={{ position: "absolute" }}>
        <h4 style={{ color: "#fff", marginRight: "52% ", marginTop: "89rem" }}>
          © 2023 Asia Store
        </h4>
        <p
          style={{
            color: "#5D5D63",
            marginLeft: "12%",
            maxWidth: "24%",
          }}
        >
          ОсОО "Азия Сеть Ритэйл" Юридический адрес: Кыргызская Республика, г.
          Бишкек, ул. Московская, д. 150
        </p>
        <p
          style={{
            position: "absolute",
            color: "#5D5D63",
            marginLeft: "4%",
            marginTop: "1%",
          }}
        >
          Политика конфинденциальности Оферта
        </p>
      </div>
      <div className="image">
        <img src={mscard} />
        <img src={visa} />
        <img src={opt} />
        <img src={mbank} />
      </div>
    </div>
  );
};

export default Footer;
