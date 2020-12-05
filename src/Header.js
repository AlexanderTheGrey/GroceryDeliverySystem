import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ cart, cartQuantity, user }, dispatch] = useStateValue();

  console.log("CQ " + cartQuantity)

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src={"./Header Logo.png"}
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_navigation">
        <Link to={!user && '/login'}>
          <div className="header_option">
            <span className="header_Line1Style">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_Line2Style">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header_option">
            <span className="header_Line1Style">Grocery</span>
            <span className="header_Line2Style">Orders</span>
          </div>
        </Link>
        

        <div className="header_option">
          <span className="header_Line1Style">Your</span>
          <span className="header_Line2Style">Account</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionCart">
            <ShoppingBasketIcon />
            <span className="header_Line2Style header_cartCount">
              {cartQuantity}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
