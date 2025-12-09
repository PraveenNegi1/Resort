"use client";
import { useState } from "react";

export default function FormOtp() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [serverOtp, setServerOtp] = useState(null);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    setLoading(true);
    setVerified(false);

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        setServerOtp(data.otp.toString()); 
        alert("OTP sent to your email!");
      } else {
        alert("Error sending OTP: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
    setLoading(false);
  };

  const verifyOtp = () => {
    if (otp === serverOtp) {
      setVerified(true);
      alert(" OTP Verified Successfully!");
    } else {
      alert(" Invalid OTP");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Email OTP Verification</h1>

      <input
        type="email"
        placeholder="Enter email"
        className="border p-2 rounded w-64"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={sendOtp}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Sending..." : "Send OTP"}
      </button>

      <input
        type="text"
        placeholder="Enter OTP"
        className="border p-2 rounded w-64"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button
        onClick={verifyOtp}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Verify OTP
      </button>

      {verified && <p className="text-green-600 font-bold"> Verified!</p>}
    </div>
  );
}
 