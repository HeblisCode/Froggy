import React from "react";
import { NavLink } from "react-router-dom";

export default function Navlink(props) {
  const { text, to } = props;

  return (
    <NavLink activeStyle={activeStyle} to={to}>
      {text}
    </NavLink>
  );
}

const activeStyle = {
  textDecoration: "underline",
};
