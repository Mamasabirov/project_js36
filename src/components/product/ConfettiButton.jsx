import React, { useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import "./PaymentForm.css";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

let animationInstance = null;

const ConfettiButton = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); 

  const { getCart } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  const makeShot = (particleRatio, opts) => {
    animationInstance &&
      animationInstance({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  };

  const fire = () => {
    setLoading(true);


    setTimeout(() => {
      setLoading(false);


      setSuccess(true);


      makeShot(0.25, {
        spread: 26,
        startVelocity: 55,
      });

      makeShot(0.2, {
        spread: 60,
      });

      makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });

      makeShot(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });

      makeShot(0.1, {
        spread: 120,
        startVelocity: 45,
      });


      setTimeout(() => {
        cartCleaner();

        navigate("/");
      }, 2000); 
    }, 5000);
  };

  const getInstance = (instance) => {
    animationInstance = instance;
  };

  return (
    <div className="App">
      <button
        className={`btn ${loading ? "loading" : ""}`}
        onClick={() => fire()}
        disabled={loading || success}
      >
        {loading ? "Загрузка..." : success ? "Успешно!" : "Подтвердить"}
      </button>

      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </div>
  );
};

export default ConfettiButton;



