import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";
function Register() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  let navigate = useNavigate();
  function handleChange(e) {
    const { id, value } = e.target;
    switch (id) {
      case "username":
        return setUserName(value);
      case "email":
        return setUserEmail(value);
      case "password":
        return setUserPassword(value);
      default:
        return;
    }
  }
  const post = () => {
    axios
      .post("http://localhost:8000/user/register", {
        name: userName,
        email: userEmail,
        password: userPassword,
      })
      .then(() => navigate("/login", { replace: true }))
      .catch(navigate("/error", { replace: true }));
  };

  return (
    <>
      <div className="container">
        <h1>CRIAR CONTA</h1>
        <form>
          <label htmlFor="username">Usuário </label>
          <input
            value={userName}
            type="text"
            id="username"
            className="input"
            onChange={handleChange}
          ></input>
          <label htmlFor="email">Email </label>
          <input
            value={userEmail}
            type="email"
            id="email"
            className="input"
            onChange={handleChange}
          ></input>
          <label htmlFor="password">Senha </label>
          <input
            value={userPassword}
            type="password"
            id="password"
            className="input"
            onChange={handleChange}
          ></input>
          <button type="button" onClick={post}>
            Enviar
          </button>
        </form>
      </div>
      <div>
        <p>Já tem uma conta?</p>
        <button>
          <Link to="/">ir para login</Link>
        </button>
      </div>
    </>
  );
}
export default Register;
