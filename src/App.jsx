import { HomePage } from "./pages/home/HomePage";
import { Routes, Route } from "react-router";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrderPage } from "./pages/orders/orderPage";
import { TrackingPage } from "./pages/tracking/TrackingPage,";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      //console.log(response.data); //; you can see product add to cart
      setCart(response.data);
    };
    fetchAppData();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />}></Route>
      <Route path="checkout" element={<CheckoutPage cart={cart} />}></Route>
      <Route path="orders" element={<OrderPage cart={cart} />}></Route>
      <Route path="tracking" element={<TrackingPage />}></Route>
    </Routes>
  );
}

export default App;
