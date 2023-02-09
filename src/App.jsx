import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Devices from "./pages/Devices";
import Restorepassword from "./pages/Restorepassword";
import Register from "./pages/Register";
import ProtectedRoutes from "./components/app/ProtectedRoutes";
import DeviceId from "./pages/DeviceId";
import Header from "./layout/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restorepassword" element={<Restorepassword />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/devices/:id" element={<DeviceId />} />
          <Route path="/devices" element={<Devices />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
