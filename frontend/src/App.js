import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import WebFont from "webfontloader";
import AllProducts from "./pages/AllProducts";
import Login from "./components/Login";
import Register from "./components/Register";
import Product from "./pages/Product";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Kumbh Sans",
          "League Spartan",
          "Ubuntu",
          "Barlow Semi Condensed",
        ],
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
