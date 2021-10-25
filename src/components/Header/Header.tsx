import "./Header.scss";
import menu from "../../images/icon-menu.svg";
import close from "../../images/icon-close.svg";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="header">
      {isMenuOpen ? <div className="header__overlay"></div> : ""}
      <div className="header__left">
        <button
          className="header__menu-btn"
          onClick={() => setIsMenuOpen(true)}
        >
          <img className="header__menu-icon" src={menu}></img>
        </button>
        <img className="header__logo" src={logo}></img>
        <nav className={`header__nav nav ${isMenuOpen ? "nav--active" : ""}`}>
          <button className="nav__close-btn">
            <img
              className="nav__close-icon"
              src={close}
              onClick={() => setIsMenuOpen(false)}
            ></img>
          </button>
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#">
                Collections
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Men
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Women
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <button className="header__cart-btn">
          <img className="header__cart-icon" src={cart}></img>
        </button>
        <img className="header__avatar" src={avatar}></img>
      </div>
    </header>
  );
}
