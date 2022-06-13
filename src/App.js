import "./App.css";
import React from "react";
import { Route, Routes} from "react-router-dom";
import Login from "./routes/Login";
import RegisterUser from "./routes/RegisterUser";
import Homepage from "./routes/Homepage";
import Fail from "./components/Fail";
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="homepage" element={<Homepage/>}/>
          <Route path="error" element={<Fail/>}/>
          <Route path="register" element={<RegisterUser />} />
        </Routes>
      </div>
  );
}

export default App;
