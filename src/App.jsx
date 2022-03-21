import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Pizza from "./screens/Pizza";
import Orders from "./screens/Orders";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-your-pizza" element={<Pizza />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
