import React from "react";
import magaz from "../assets/market.jpg";
const AboutUsPage = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          margin: "2%",
          fontSize: "2.625rem",
          color: "#101010",
          fontWeight: "600",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        О нас
      </h2>
      <p
        style={{
          maxWidth: "39%",
          marginLeft: "32%",
          color: "#81817e",
          fontWeight: "700",
        }}
      >
        Asia Store — официальный магазин техники Apple со статусом Apple
        Authorized Reseller и официальный реселлер Garmin в Кыргызстане, а также
        официальный дистрибьютор JBL & Harman Kardon и умных устройств от
        Яндекс.
      </p>
      <div>
        <img
          style={{
            width: "70%",
            height: "auto",
            marginLeft: "13%",
            marginTop: "3%",
          }}
          src={magaz}
        />
        <p
          style={{
            maxWidth: "34%",
            marginLeft: "34%",
            marginTop: "1%",
            fontWeight: "600",
          }}
        >
          В магазине Asia Store, вы можете не только купить Mac, iPhone и iPad,
          устройства Garmin, умные гаджеты Яндекса и акустику JBL с официальной
          гарантией, но и попробовать устройства в действии, прежде чем
          совершить покупку.
        </p>
        <p
          style={{
            maxWidth: "34%",
            marginLeft: "34%",
            fontWeight: "600",
            marginTop: "2%",
            marginBottom: "2%",
          }}
        >
          Наши продавцы, прошедшие специальную подготовку Apple, всегда помогут
          квалифицированным советом в выборе техники, научат ей пользоваться и
          предложат качественные аксессуары, а в авторизованном сервисном центре
          проведут гарантийный ремонт и сервисное обслуживание техники Apple.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
