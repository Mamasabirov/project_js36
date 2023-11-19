import React, { useState, useEffect } from "react";

export default function SimpleRating({ initialRating, onRatingChange, itemId }) {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    onRatingChange(rating);
  }, [rating, onRatingChange]);

  const handleStarClick = (value) => {
    setRating(value);
    saveRatingToLocalStorage(value);
  };

  const saveRatingToLocalStorage = (value) => {
    localStorage.setItem(`product_rating_${itemId}`, value);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          style={{
            cursor: "pointer",
            color: value <= rating ? "yellow" : "gray",
            fontSize: "24px", 
            marginRight: "4px",
          }}
          onClick={() => handleStarClick(value)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

