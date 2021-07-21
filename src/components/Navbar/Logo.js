import { Link } from "react-router-dom";
import logoImg from "../../images/Logo.png";
import React from "react";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logoImg} alt="Froggy Logo" />
      <h1>Froggy</h1>
    </Link>
  );
}
