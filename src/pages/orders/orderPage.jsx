import { Link } from "react-router";
import { Header } from "../../components/Header";
import "./orders.css";
import axios from "axios";
import { useState, useEffect } from "react";

import { OrderGrid } from "./OrderGrid";

export function OrderPage({ cart }) {
  const [Orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrderPageData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    fetchOrderPageData();
  }, []);
  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          <OrderGrid Orders={Orders} />
        </div>
      </div>
    </>
  );
}
/*
Orders
│
├── Order 1
│   ├── Product 1
│   ├── Product 2
│   └── Product 3
│
├── Order 2
│   ├── Product 1
│   └── Product 2
│
└── Order 3
    └── Product 1
*/
