import React from "react";
import { Link } from "react-router-dom";
const Index = () => {
  return (
  
      <div className="index">
         <p>
        <Link to="/login">Login</Link>
      </p>{" "}
      <p>
        <Link to="/register">Criar Conta</Link>
      </p>
      </div>
  );
};

export default Index;
