import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import HeaderSearch from "./HeaderSearch";
import { auth } from "./FirebaseDeployment";

function Header() {
  const [{ cart, cartQuantity, user}, dispatch] = useStateValue();
  
  const handleSignOut = () => { // Change the header on Sign Out
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src={"./Header Logo.png"}
        />
      </Link>

      <HeaderSearch/>

      <div className="header_navigation">
        <Link to={!user && '/login'}>
          <div onClick={handleSignOut} className="header_option">
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
