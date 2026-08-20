import axios from "axios";
import { OrderSummary } from "./OrderSummary";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./checkout-header.css";
import "./CheckoutPage.css";
import { PaymentSummary } from "./Payment-Summary";
import { CheckoutHeader } from "./CheckoutHeader";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);
  useEffect(() => {
    const fetchCheckoutDeliveryOptionData = async () => {
      const response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );

      setDeliveryOption(response.data);
    };
    fetchCheckoutDeliveryOptionData();
    const fetchPaymentSummaryData = async () => {
      const response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    fetchPaymentSummaryData();
  }, []);
  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
