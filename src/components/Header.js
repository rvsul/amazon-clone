import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";

function Header() {
  const [state, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/checkout">
        <img
          className="header__logo"
          src="https://boostedmedia.net/wp-content/uploads/2019/11/white-amazon-logo-png-6.png"
          alt=""
        ></img>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Rasul,</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      <Link to="checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon className="header__shoppingBasketIcon" />
          <span className="header__optionLineTwo header__basketCount">
            {state.basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}
export default Header;
