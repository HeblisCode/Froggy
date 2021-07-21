import React from "react";
import Navlink from "./Navlink";
import Logo from "./Logo";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <Logo />
      <div className="navLinkContainer">
        <Navlink text="Shop" to="/shop" />
        <Navlink text="Cart" to="/cart" />
      </div>
    </nav>
  );
}
