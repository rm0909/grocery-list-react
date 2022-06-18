import React from "react";
import { Link } from "react-router-dom";

function Header() {
  let { userName } = JSON.parse(localStorage.getItem("getData"));
  let toUpperCase = userName.charAt(0).toUpperCase() + userName.slice(1);
  return (
    <div className="header">
      <h1 className="title">Lista de Compras</h1>
      {toUpperCase ? <h2 className="user">Bem-vindo {toUpperCase}</h2> : <h2><Link to="/login">Login</Link></h2>}
    </div>
  );
}
export default Header;
