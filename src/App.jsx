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
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    //console.log(response.data); //; you can see product add to cart
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage cart={cart} loadCart={loadCart} />}
      ></Route>
      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart} />}
      ></Route>
      <Route path="orders" element={<OrderPage cart={cart} loadCart={loadCart} />}></Route>
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} />}
      ></Route>
    </Routes>
  );
}

export default App;
