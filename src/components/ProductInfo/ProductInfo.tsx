import "./ProductInfo.scss";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import cart from "../../images/icon-cart.svg";
import { useState } from "react";

interface Props {
  addToCart: (num: number) => void;
}

export default function ProductInfo({ addToCart }: Props) {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="product-info">
      <h1 className="product-info__brand">Sneaker Company</h1>
      <h2 className="product-info__name">Fall Limited Edition Sneakers</h2>
      <p className="product-info__description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product-info__price-container">
        <span className="product-info__current-price">$125.00</span>
        <span className="product-info__discount">50%</span>
        <span className="product-info__former-price">$250.00</span>
      </div>
      <div className="product-info__controls controls">
        <div className="controls__quantity-selector">
          <button className="controls__quantity-btn" onClick={decreaseQuantity}>
            <img className="controls__quantity-icon" src={minus}></img>
          </button>
          <span className="controls__quantity">{quantity}</span>
          <button className="controls__quantity-btn" onClick={increaseQuantity}>
            <img className="controls__quantity-icon" src={plus}></img>
          </button>
        </div>
        <button
          className="controls__add-btn"
          onClick={() => addToCart(quantity)}
        >
          <img className="controls__cart-icon" src={cart}></img>Add to cart
        </button>
      </div>
    </div>
  );
}
