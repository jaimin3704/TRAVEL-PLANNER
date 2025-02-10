import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCreditCard, FaShieldAlt, FaSpinner, FaGooglePay, FaPaypal, FaApplePay, FaWallet, FaUniversity } from "react-icons/fa";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight || null;
  const selectedPlan = location.state?.selectedPlan || null;
  const totalAmount = location.state?.totalAmount || flight?.price || 0;

  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePayment = () => {
    if (!paymentMethod) {
      setError("⚠️ Please select a payment method.");
      return;
    }

    if (paymentMethod === "card" && (!cardNumber || !expiryDate || !cvv)) {
      setError("⚠️ Please fill in all card details.");
      return;
    }

    setError("");
    setShowConfirmation(true);
  };

  const confirmPayment = () => {
    setLoading(true);
    setTimeout(() => {
      alert("🎉 Booking Confirmed! Your ticket has been emailed.");
      navigate("/confirmation", { state: { flight, selectedPlan, totalAmount } });
    }, 2000);
  };

  if (!flight) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-3xl font-bold text-red-600">404 - No Flight Selected</h2>
        <p className="text-gray-600 mt-2">Please go back and select a flight before proceeding to payment.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="p-8 max-w-xl w-full bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Secure Payment</h2>

        {/* Flight & Insurance Summary */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">✈️ Flight Details</h3>
          <p className="text-lg"><strong>Airline:</strong> {flight.airline}</p>
          <p className="text-lg"><strong>Flight Price:</strong> ₹{flight.price}</p>

          {selectedPlan && (
            <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-500 rounded-md">
              <h3 className="text-xl font-semibold text-green-700">✅ Insurance Details</h3>
              <p className="text-lg"><strong>Plan:</strong> {selectedPlan.title}</p>
              <p className="text-lg"><strong>Coverage:</strong> {selectedPlan.details}</p>
              <p className="text-lg"><strong>Insurance Price:</strong> ₹{selectedPlan.price}</p>
            </div>
          )}

          <div className="p-4 mt-4 bg-blue-100 border-l-4 border-blue-500 rounded-md">
            <p className="text-lg font-bold text-blue-700">Total Amount: ₹{totalAmount}</p>
          </div>
        </div>

        {/* Payment Method Selection */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6">💳 Choose Payment Method</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button
            onClick={() => setPaymentMethod("upi")}
            className={`p-3 rounded-lg flex items-center justify-center shadow-md text-lg ${
              paymentMethod === "upi" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            <FaGooglePay className="text-3xl mr-2" /> UPI
          </button>
          <button
            onClick={() => setPaymentMethod("card")}
            className={`p-3 rounded-lg flex items-center justify-center shadow-md text-lg ${
              paymentMethod === "card" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            <FaCreditCard className="text-2xl mr-2" /> Card
          </button>
          <button
            onClick={() => setPaymentMethod("netbanking")}
            className={`p-3 rounded-lg flex items-center justify-center shadow-md text-lg ${
              paymentMethod === "netbanking" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            <FaUniversity className="text-2xl mr-2" /> Net Banking
          </button>
          <button
            onClick={() => setPaymentMethod("wallet")}
            className={`p-3 rounded-lg flex items-center justify-center shadow-md text-lg ${
              paymentMethod === "wallet" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            <FaWallet className="text-2xl mr-2" /> Wallet
          </button>
        </div>

        {/* Card Payment Fields */}
        {paymentMethod === "card" && (
          <div className="mt-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">CVV</label>
                <input
                  type="password"
                  placeholder="***"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

        {/* Confirm Payment */}
        <button
          onClick={handlePayment}
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 mt-6"
          disabled={loading}
        >
          Proceed to Checkout
        </button>

        {/* Payment Confirmation Popup */}
        {showConfirmation && (
          <div className="mt-4 p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
            <p className="text-lg font-semibold text-yellow-800">Confirm Payment?</p>
            <div className="flex justify-end mt-4 space-x-4">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg" onClick={confirmPayment}>
                Yes, Pay Now
              </button>
              <button className="px-6 py-3 bg-gray-400 text-white rounded-lg" onClick={() => setShowConfirmation(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
