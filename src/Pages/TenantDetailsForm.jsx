import { useState } from "react";

export default function TenantDetailsForm() {
  const [formData, setFormData] = useState({
    roomNo: "",
    name: "",
    phone: "",
    occupation: "",
    type: "Bachelor",
    members: "",
    rentDate: "",
    rent: "",
    deposit: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Tenant Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Room Number */}
        <div>
          <label className="block font-medium">Room No *</label>
          <input
            type="text"
            name="roomNo"
            value={formData.roomNo}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter Room No"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block font-medium">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter Name"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-medium">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter Phone Number"
          />
        </div>

        {/* Occupation */}
        <div>
          <label className="block font-medium">Occupation *</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter Occupation"
          />
        </div>

        {/* Type (Bachelor/Family) */}
        <div>
          <label className="block font-medium">Type *</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="Bachelor">Bachelor</option>
            <option value="Family">Family 👪</option>
          </select>
        </div>

        {/* Number of Members (Only if Family is selected) */}
        {formData.type === "Family" && (
          <div>
            <label className="block font-medium">No. of Members *</label>
            <input
              type="number"
              name="members"
              value={formData.members}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
              placeholder="Enter No. of Members"
            />
          </div>
        )}

        {/* Date of Rent Payment */}
        <div>
          <label className="block font-medium">Date of Rent Payment (monthly) *</label>
          <input
            type="date"
            name="rentDate"
            value={formData.rentDate}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Rent Amount */}
        <div>
          <label className="block font-medium">Rent *</label>
          <input
            type="number"
            name="rent"
            value={formData.rent}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter Rent Amount"
          />
        </div>

        {/* Security Deposit */}
        <div>
          <label className="block font-medium">Security Deposit *</label>
          <input
            type="number"
            name="deposit"
            value={formData.deposit}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
            placeholder="Enter Security Deposit"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
