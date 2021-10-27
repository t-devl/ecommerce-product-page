import "./Cart.scss";
import thumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import bin from "../../images/icon-delete.svg";
import { useState } from "react";

interface Props {
  numberOfItems: number;
  setNumberOfItems: (num: number) => void;
}

export default function Cart({ numberOfItems, setNumberOfItems }: Props) {
  return (
    <div className="cart">
      <header className="cart__header">
        <h2 className="cart__title">Cart</h2>
      </header>
      <div className="cart__body">
        {numberOfItems ? (
          <>
            <ul className="cart__items-list">
              <li className="cart__item item">
                <img className="item__image" src={thumbnail1}></img>
                <div className="item__info">
                  <h3 className="item__name">Autumn Limited Edition...</h3>
                  <div className="item__cost-container">
                    $125.00 x {numberOfItems}
                    <span className="item__total-cost">
                      ${125 * numberOfItems}.00
                    </span>
                  </div>
                </div>
                <button
                  className="item__delete-btn"
                  onClick={() => setNumberOfItems(0)}
                >
                  <img className="item__delete-icon" src={bin}></img>
                </button>
              </li>
            </ul>
            <button className="cart__checkout-btn">Checkout</button>
          </>
        ) : (
          <p className="cart__message">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
