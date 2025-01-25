"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", amount:undefined});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const initiatePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/initiate-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      console.log(data);


      if (data.paymentUrl) {
        window.location.href = data.paymentUrl; // Redirect to Cashfree payment link
      } else {
        alert(data.message || "Payment initiation failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while initiating the payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200 ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        {/* Heading Section */}
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-2">
          Join Our Membership
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Unlock exclusive features and benefits with our premium membership plan.
        </p>

        {/* Payment Form */}
        <form onSubmit={initiatePayment} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Amount Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Membership Fee</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter the amount (e.g., 999)"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:opacity-90 ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>

  );
}
