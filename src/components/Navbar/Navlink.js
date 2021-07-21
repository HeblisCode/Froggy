import React from "react";
import { NavLink } from "react-router-dom";

export default function Navlink(props) {
  const { text, to } = props;

  return (
    <NavLink className="navLink" activeClassName="activeNavLink" to={to}>
      {text}
    </NavLink>
  );
}
