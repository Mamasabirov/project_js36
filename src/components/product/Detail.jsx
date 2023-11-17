import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { useCart } from "../../contexts/CartContextProvider";
import mapsBcg from "../../assets/ll.jpg";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  backgroundImage: "url(" + mapsBcg + ")",
  backgroundSize: "auto",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center right",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  color: "#4B0082",
  display: "flex",
};

export default function Detail({
  image,
  title,
  category,
  description,
  price,
  open,
  handleClose,
  item,
}) {
  const { checkProductInCart, addProductToCart } = useCart();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <div>
            <img width={300} src={image} alt="" />
          </div>
          <div>
            <h1 style={{ font: "italic small-caps bold 26px cursive" }}>
              {title}
            </h1>
            <p style={{ font: "italic small-caps bold 16px cursive" }}>
              description: {description}
            </p>
            <p style={{ font: "italic small-caps bold 16px cursive" }}>
              category: {category}
            </p>
          </div>
          <div
            style={{
              marginTop: "auto",
            }}
          >
            {checkProductInCart(item.id) ? (
              <Button disabled={true}>В корзине</Button>
            ) : (
              <Button onClick={() => addProductToCart(item)}>В корзину</Button>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
