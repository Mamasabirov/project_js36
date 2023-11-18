import React, { useState, useEffect } from "react";
import "./PaymentForm.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import visa from "../assets/Visa.png";
import chip from "../assets/chip.png";
import nfc from "../assets/nfc.png";
import ConfettiButton from "./ConfettiButton";

const PaymentForm = () => {
  const [cardName, setCardName] = useState("Card name");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [expiryDate, setExpiryDate] = useState("MM/YY");
  const [cvv, setCvv] = useState("000");
  const [showCvv, setShowCvv] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setFormFilled(isFormFilled());
  }, [cardName, cardNumber, expiryDate, cvv]);

  const setInputState = (id, isFilled) => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      if (isFilled) {
        inputElement.classList.add("filled");
      } else {
        inputElement.classList.remove("filled");
      }
    }
  };

  const isFormFilled = () => {
    return (
      cardName !== '' &&
      cardName !== 'Card name' &&
      cardNumber.replace(/\s/g, '').length === 16 &&
      expiryDate.replace(/\D/g, '').length === 4 &&
      cvv.replace(/\D/g, '').length === 3
    );
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let sanitizedValue = "";
    switch (id) {
      case "name":        
        sanitizedValue = value.replace(/[^a-zA-Zа-яА-Я\s]/g, "");
        setCardName(sanitizedValue);
        break;
      case "number":
        const formattedNumber = value.replace(/\D/g, "");
        const truncatedNumber = formattedNumber.slice(0, 16);
        const cardNumberGroups = truncatedNumber.match(/.{1,4}/g);

        if (cardNumberGroups) {
          const formattedCardNumber = cardNumberGroups.join(" ");
          setCardNumber(formattedCardNumber);
        } else {
          setCardNumber(truncatedNumber);
        }
        break;
      case "date":
        const formattedDate = value.replace(/\D/g, "");

        if (formattedDate.length >= 2) {
          const truncatedDate = formattedDate.slice(0, 4);
          const month = truncatedDate.slice(0, 2);
          const year = truncatedDate.slice(2, 4);
          const validMonth = Math.min(Math.max(parseInt(month, 10), 1), 12);
          setExpiryDate(`${validMonth.toString().padStart(2, "0")}/${year}`);
        } else {
          setExpiryDate(formattedDate);
        }
        break;
      case "cvv":
        const formattedCvv = value.replace(/\D/g, "").slice(0, 3);
        setCvv(formattedCvv);
        break;
      default:
        break;
    }
  };

  const handleInputFocus = (id) => {
    switch (id) {
      case "name":
        if (cardName === "Card name") {
          setCardName("");
          setInputState("name", true);
        }
        break;
      case "number":
        if (cardNumber === "0000 0000 0000 0000") {
          setCardNumber("");
          setInputState("number", true);
        }
        break;
      case "date":
        if (expiryDate === "MM/YY") {
          setExpiryDate("");
          setInputState("date", true);
        }
        break;
      case "cvv":
        if (cvv === "000") {
          setCvv("");
          setInputState("cvv", true);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormFilled()) {
      console.log("Данные формы:", { cardName, cardNumber, expiryDate, cvv });
      setFormFilled(true);
      setErrorMessage('');
      setShowConfetti(true); 
      setError(false); 
    } else {
      setFormFilled(false);
      setErrorMessage('Пожалуйста, заполните все поля формы.');
      setShowConfetti(false); 
      setError(true); 
    }
  };
  

  return (
    <div className="container">
      <img src="" alt="" />
      <div className="payment">
        <div className="card">
          <div className="card__background">
            <div className="card__visa">
              <img src={visa} alt="Visa logo" />
            </div>
          </div>
          <div className="card__left">
            <div className="card__nfc">
              <img src={chip} alt="chip" />
              <img src={nfc} alt="nfc" />
            </div>
          </div>
          <div className="card__number">{cardNumber}</div>
          <div className="card__name">
            <h3>Cardholder Name</h3>
            <p>{cardName}</p>
          </div>
          <div className="card__expiry">
            <h3>Expiry Date</h3>
            <p>{expiryDate}</p>
          </div>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__detail">
          <label htmlFor="name">Cardholder Name</label>
          <input
            className="input_big"
            type="text"
            id="name"
            value={cardName}
            onChange={handleInputChange}
            onFocus={() => handleInputFocus("name")}
            required
          />
          <label htmlFor="number">Card Number</label>
          <input
            className="input_big"
            type="text"
            id="number"
            value={cardNumber}
            onChange={handleInputChange}
            onFocus={() => handleInputFocus("number")}
            required
          />
          <label htmlFor="date">Expiry Date</label>
          <input
            className="input_small"
            type="text"
            id="date"
            value={expiryDate}
            onChange={handleInputChange}
            onFocus={() => handleInputFocus("date")}
            required
          />
          <label htmlFor="cvv">CVV</label>
          <div className="cvv-container">
            <input
              className="input_small"
              type={showCvv ? "text" : "password"}
              id="cvv"
              value={cvv}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus("cvv")}
              required
            />
            <button
              type="button"
              onClick={() => setShowCvv(!showCvv)}
              className="toggle-cvv"
            >
              {showCvv ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <ConfettiButton showConfetti={showConfetti} style={{ marginTop: '10px' }} />
          {error && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
