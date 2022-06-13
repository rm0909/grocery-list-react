import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";
function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  let navigate = useNavigate();

  function handleChange(e) {
    const { id, value } = e.target;
    switch (id) {
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
      .post("http://localhost:8000/user/login", {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        localStorage.setItem("userID", res.data.id);
        navigate("/homepage", { replace: true });
      })
      .catch(() => navigate("/error", { replace: true }));
  };
  return (
    <>
      <div className="container">
        <h1>LOGIN</h1>
        <form>
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
      <p>Não tem uma conta?</p>
      <button>
        <Link to="/register">registrar</Link>
      </button>
    </>
  );
}
export default Login;
