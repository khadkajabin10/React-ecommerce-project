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
    axios.get("/api/cart-items?expand=product").then((response) => {
      //console.log(response.data); //; you can see product add to cart
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
