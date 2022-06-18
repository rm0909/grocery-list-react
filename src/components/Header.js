import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./authContext/authContext";
function Header() {
  const { authenticated, handleLogout } = useContext(Context);
  let { userName } = JSON.parse(localStorage.getItem("getData"));
  let toUpperCase = userName.charAt(0).toUpperCase() + userName.slice(1);
  return (
    <div className="header">
      <h1 className="title">Lista de Compras</h1>
      {authenticated && toUpperCase ? (
        <div className="user-container">
          <h2 className="user">Bem-vindo {toUpperCase}</h2>
          <div className="logout"
            onClick={() => {
              localStorage.removeItem("getData");
              handleLogout();
            }}
          >
            sair
          </div>
        </div>
      ) : (
        <h2>
          <Link to="/login">Login</Link>
        </h2>
      )}
    </div>
  );
}
export default Header;
