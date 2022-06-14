import React from "react";
function Header() {
  let {userName} = JSON.parse(localStorage.getItem("getData"))
  const toUpperCase = userName.charAt(0).toUpperCase() + userName.slice(1)
  return (
    <>
      <h1 className="title">Lista de Compras</h1>
      <h3>Bem-Vindo {toUpperCase}</h3>
    </>
  );
}

export default Header;
