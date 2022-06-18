import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import RegisterUser from "./routes/RegisterUser";
import { Homepage } from "./routes/Homepage";
import { AuthProvider } from "./components/authContext/authContext";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="register" element={<RegisterUser />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
