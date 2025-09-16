import React, { useState } from "react";
import tours from "../data/tours";

const Booking = () => {
  const [selectedTour, setSelectedTour] = useState("");
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passport, setPassport] = useState("");
  const [cnic, setCnic] = useState("");
  const [warning, setWarning] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTour || !userType || !email || !phone) {
      setWarning("⚠️ Please fill in all required fields.");
      setTimeout(() => setWarning(""), 4000);
      return;
    }
    if (userType === "pakistani" && !cnic) {
      setWarning("⚠️ CNIC is required for Pakistani visitors.");
      setTimeout(() => setWarning(""), 4000);
      return;
    }
    if (userType === "foreigner" && !passport) {
      setWarning("⚠️ Passport number is required for foreign visitors.");
      setTimeout(() => setWarning(""), 4000);
      return;
    }
    setWarning("");
    alert("✅ Booking submitted successfully!");
    setSelectedTour("");
    setUserType("");
    setEmail("");
    setPhone("");
    setPassport("");
    setCnic("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Book Your Tour</h1>

      {warning && <div className="mb-4 text-red-600 font-medium">{warning}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">Select Tour</label>
          <select value={selectedTour} onChange={(e) => setSelectedTour(e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500">
            <option value="">-- Choose a Tour --</option>
            {tours.map((t) => <option key={t.id} value={t.id}>{t.name} ({t.days} days)</option>)}
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Visitor Type</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500">
            <option value="">-- Select Type --</option>
            <option value="pakistani">Pakistani</option>
            <option value="foreigner">Foreigner</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Email</label>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Mobile Number</label>
          <input type="tel" placeholder="03xx-xxxxxxx" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
        </div>

        {userType === "pakistani" && (
          <div>
            <label className="block font-medium text-gray-700 mb-1">CNIC</label>
            <input type="text" placeholder="Enter your CNIC" value={cnic} onChange={(e) => setCnic(e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
          </div>
        )}

        {userType === "foreigner" && (
          <div>
            <label className="block font-medium text-gray-700 mb-1">Passport Number</label>
            <input type="text" placeholder="Enter your Passport No" value={passport} onChange={(e) => setPassport(e.target.value)} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
          </div>
        )}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Submit Booking</button>
      </form>
    </div>
  );
};

export default Booking;
