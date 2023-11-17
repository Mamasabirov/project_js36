import React, { useState } from 'react';
import "./CartButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCartShopping } from '@fortawesome/free-solid-svg-icons';



const CartButton = (props) => {
    const {item, checkProductInCart, addProductToCart}=props
    const [isActive, setActive] = useState(false)
    return (
    <div style={{width: '100%'}}>
    <button onClick={()=>{addProductToCart(item)}} className={`cart-button ${!item ? (""):(checkProductInCart(item.id) ? ("clicked"):(""))}`}>
	<span className="add-to-cart">Add to cart</span> 
	<span className="added">Added</span>
    <FontAwesomeIcon className='fa-cart-shopping' icon={faCartShopping} />
    <FontAwesomeIcon className='fa-box' icon={faBox} />
    </button>
        </div>
    );
};

export default CartButton;