"use client";

import validateData from "@/utils/validateData";

import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Importing the close icon from react-icons



export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", amount: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const initiatePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("data cheking.."
    );
    
    const validationErrors = validateData(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

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
    <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
      <div className="pr-2 md:mb-14 py-14 md:py-0">
        <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl"><span className="block w-full">
          Benefits of Institutional </span> Membership!</h1>
        <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
          Collaboration and Partnerships, Networking Opportunities, Professional Development, Recognition and Awards, Exclusive Member Benefits
        </p>
        <div className="mt-4">
          <a href="#contact" className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-2">Join Our Membership</h1>
          <p className="text-center text-gray-700 mb-6">Unlock exclusive features and benefits with our premium membership plan.</p>

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
                
              />
              {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
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
               
              />
              {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
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
             
              />
              {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
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
                
              />
              {errors.amount && <div className="text-red-500 text-sm">{errors.amount}</div>}
            </div>

            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:opacity-90 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
