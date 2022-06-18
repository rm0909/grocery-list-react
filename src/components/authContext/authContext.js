import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  let navigate = useNavigate()
  useEffect(() => {
    checkAuth();
  }, [authenticated]);
  const checkAuth = () => {
    const data = JSON.parse(localStorage.getItem("getData"));
    if (!data) {
        setAuthenticated(false)
        navigate("/",{ replace:true})
        return
    }
    if (data.isAuth){ 
        setAuthenticated(true)
        navigate("/homepage", {replace:true})
    };
  };
   const handleLogin = () => setAuthenticated(true);
   const handleLogout = () => setAuthenticated(false);
  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout}}>
      {children}
    </Context.Provider>
  );
}
export { Context, AuthProvider };
