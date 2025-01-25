"use client"; // Required for client-side rendering in the app directory

import { useState } from "react";

const PaymentButton = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const orderId = `order_${Date.now()}`;

      // Call the backend API to generate a session ID
      const response = await fetch("/api/createOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          orderAmount: 500, // INR Amount
          customerName: "Vikas Kumar",
          customerEmail: "vikas@example.com",
          customerPhone: "9876543210",
        }),
      });

      const { sessionId } = await response.json();

      if (!sessionId) {
        throw new Error("Failed to generate session ID");
      }

      // Initialize Drop-In Checkout
      const cashfree = new window.Cashfree();
      cashfree.initialiseDropin({
        orderToken: sessionId, // Use the session ID
        container: "cashfree-payment", // Specify container ID
        onSuccess: (data) => {
          console.log("Payment Success:", data);
          alert("Payment Successful!");
        },
        onFailure: (error) => {
          console.error("Payment Failed:", error);
          alert("Payment Failed!");
        },
      });
    } catch (error) {
      console.error("Error during payment:", error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
      <div id="cashfree-payment"></div> {/* Container for Drop-In Checkout */}
    </div>
  );
};

export default PaymentButton;
