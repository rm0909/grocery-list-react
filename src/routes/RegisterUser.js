import React, { useState,useContext } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../components/authContext/authContext";
function Register() {
  const { authenticated } = useContext(Context)
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
  const post = async() => {
    try{
     await axios
      .post("https://grocery-list-restapi.herokuapp.com/user/register", {
        name: userName,
        email: userEmail,
        password: userPassword,
      })
      navigate("/", {replace:true})
    }catch(err){
      alert("falha ao criar conta",err)
    }
  };

  return (
    !authenticated && <div className="body">
      <div className="container">
        <h1>CRIAR CONTA</h1>
        <form>
          <label htmlFor="username">Nome: <input
            value={userName}
            type="text"
            id="username"
            className="input"
            onChange={handleChange}
            placeholder="max 12 caracteres"
            max="12"
          /></label>
          <label htmlFor="email">Email: <input
            value={userEmail}
            type="email"
            id="email"
            className="input"
            onChange={handleChange}
            placeholder="seu email"
          /></label>
          <label htmlFor="password">Senha: <input
            value={userPassword}
            type="password"
            id="password"
            className="input"
            onChange={handleChange}
            placeholder="minimo 6 caracteres"
            min="6"
          /></label>
          <div className="send--button">
            <button type="button" onClick={post}>
              Enviar
            </button>
          </div>
        </form>{" "}
        <br/>
        <>
          <p>Já tem uma conta?</p>
          <p>
            <Link to="/">login</Link>
          </p>
        </>
      </div>
    </div>
  );
}
export default Register ;
