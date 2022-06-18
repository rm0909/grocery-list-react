import React, { useState, useContext } from "react";
import axios from "axios";
import "./Container.css";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../components/authContext/authContext";

function Login() {
  const { authenticated, handleLogin } = useContext(Context);
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
  const post = async () => {
    await axios
      .post("https://grocery-list-restapi.herokuapp.com/user/login", {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        const { id, name } = res.data;
        let dataToStore = {
          userID: id,
          userName: name,
          isAuth: true,
        };
        localStorage.setItem("getData", JSON.stringify(dataToStore));
        handleLogin();
        navigate("/homepage", { replace: true });
      })
      .catch(() =>
        alert("Falha ao logar. Veja se email e senha estão corretos")
      );
  };
  return (
    !authenticated && (
      <div className="body">
        <div className="container">
          <h1>LOGIN</h1>
          <br />
          <form>
            <label htmlFor="email">Email </label>
            <input
              value={userEmail}
              type="email"
              id="email"
              className="input"
              onChange={handleChange}
            ></input>
            <br />
            <label htmlFor="password">Senha </label>
            <input
              value={userPassword}
              type="password"
              id="password"
              className="input"
              onChange={handleChange}
            ></input>
            <div className="send--button">
              {" "}
              <button type="button" onClick={post}>
                Enviar
              </button>
            </div>
          </form>
          <br />
          <>
            <p>Não tem uma conta?</p>
            <button>
              <Link to="/register">registrar</Link>
            </button>
          </>
        </div>
      </div>
    )
  );
}
export default Login;
