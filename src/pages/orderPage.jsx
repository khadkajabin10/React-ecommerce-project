import { Link } from "react-router";
import { Header } from "../components/Header";
import "./orders.css";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import dayjs from "dayjs";
import { formatMoney } from "../utilts/money";

export function OrderPage({ cart }) {
  const [Orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);
  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {Orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{dayjs(order.orderIimeMs).format("MMMM D")}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{formatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                <div className="order-details-grid">
                  {order.products.map((Orderproduct) => {
                    //network vitra hernu parxa backend ko k k name xa vanni request patauda
                    return (
                      <Fragment key={Orderproduct.product.id}>
                        <div className="product-image-container">
                          <img src={Orderproduct.product.image} />
                        </div>

                        <div className="product-details">
                          <div className="product-name">
                            {Orderproduct.product.name}
                          </div>
                          <div className="product-delivery-date">
                            Arriving on:
                            {dayjs(Orderproduct.estimatedDeliveryTimeMs).format(
                              "MMMM d",
                            )}
                          </div>
                          <div className="product-quantity">
                            Quantity: {Orderproduct.quantity}
                          </div>
                          <button className="buy-again-button button-primary">
                            <img
                              className="buy-again-icon"
                              src="images/icons/buy-again.png"
                            />
                            <span className="buy-again-message">
                              Add to Cart
                            </span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <Link href="/tracking">
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </Link>
                        </div>
                      </Fragment>
                    );
                  })}
                  ;
                </div>
              </div>
            );
          })}
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
