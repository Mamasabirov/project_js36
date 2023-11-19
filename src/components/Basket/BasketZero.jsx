import React from "react";
import shop from "../../components/assets/shopping-bag.png";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import "./Basket.css";

const BasketZero = () => {
  return (
    <Box
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        background: "linear-gradient(to right, #ff9999 0%, #993399 100%)",
        width: "100%",
        height: "100vh",
        zIndex: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "40%",
          height: "65%",
          border: "0px solid #000",
          borderRadius: "18px",
          background: "linear-gradient(to right, #ffffcc 0%, #ff99cc 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginTop: "10px",
            marginRight: "10px",
            display: "flex",
          }}
        >
          <Link to="/">
            <button
              style={{
                width: "50px",
                height: "50px",
                background: "transparent",
                border: "thick double pink",
                borderRadius: "15px",
                color: "white",
                font: "small-caps bold 24px/1 sans-serif",
                fontSize: "24px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(" + 3 + ")",
                },
              }}
            >
              X
            </button>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: "20%", marginTop: "10px" }}
            src={shop}
            alt="basket"
          />
        </div>
        <div
          style={{
            font: 'italic 1.2rem "Fira Sans", serif',
            fontSize: "32px",
            textAlign: "center",
            color: "black",
          }}
        >
          <p>Корзина пустая :(</p>

          <p style={{ marginTop: "35px", marginBottom: "35px" }}>
            Чтобы добавить товар в корзину, зайдите на страницу каталога
          </p>
        </div>
        <div className="hoverClick">
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="buttonClick" type="button">
              Посмотреть каталог
            </button>
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default BasketZero;
