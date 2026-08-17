import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderPage } from "./pages/orderPage";
import { TrackingPage } from "./pages/TrackingPage,";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCart(response.data);
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />}></Route>
      <Route path="checkout" element={<CheckoutPage cart={cart} />}></Route>
      <Route path="orders" element={<OrderPage />}></Route>
      <Route path="tracking" element={<TrackingPage />}></Route>
    </Routes>
  );
}

export default App;
