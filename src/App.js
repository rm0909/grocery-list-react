import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import RegisterUser from "./routes/RegisterUser";
import { Homepage } from "./routes/Homepage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="register" element={<RegisterUser />} />
      </Routes>
    </div>
  );
}

export default App;
