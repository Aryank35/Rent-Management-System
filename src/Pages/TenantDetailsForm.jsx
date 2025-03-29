export default function TenantDetailsForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500 p-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🏠 Tenant Details
        </h2>
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSc8pmHC-BC18d4fnuF5Haeo_9ErLvgv_0_FrOLsFIHXwR6Ykw/formResponse"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Room Number */}
          <div>
            <label className="block font-semibold text-gray-700">
              Room No *
            </label>
            <input
              type="text"
              name="entry.1703043281"
              required
              className="w-full border-2 border-purple-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Room No"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block font-semibold text-gray-700">Name *</label>
            <input
              type="text"
              name="entry.2040680480"
              required
              className="w-full border-2 border-purple-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Name"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-semibold text-gray-700">
              Phone Number *
            </label>
            <input
              type="tel"
              name="entry.1233002413"
              required
              pattern="[0-9]{10}"
              maxLength="10"
              minLength="10"
              title="Phone number must be exactly 10 digits"
              className="w-full border-2 border-purple-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Phone Number"
            />
          </div>

          {/* Occupation */}
          <div>
            <label className="block font-semibold text-gray-700">
              Occupation *
            </label>
            <input
              type="text"
              name="entry.688179139"
              required
              className="w-full border-2 border-purple-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Occupation"
            />
          </div>

          {/* Type */}
      {/* Type */}
<div>
  <label className="block font-semibold text-gray-700">Type *</label>
  <select
    name="entry.908648638"
    required
    className="w-full border-2 border-purple-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-500"
  >
    <option value="" disabled selected>
      🔽 Select Type
    </option>
    <option value="Bachelor">👨‍🎓 Bachelor</option>
    <option value="Family">👨‍👩‍👧‍👦 Family</option>
  </select>
</div>


          {/* No. of Members */}
          <div>
            <label className="block font-semibold text-gray-700">
              No. of Members *
            </label>
            <select name="entry.1946567594" required className="w-full border-2 border-purple-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="" disabled selected>
                Select No. of Members
              </option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Rent Payment Date */}
          <div>
            <label className="block font-semibold text-gray-700">
              Date of Rent Payment *
            </label>
            <select name="entry.433380058" required className="w-full border-2 border-purple-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="" disabled selected>
                Select Date
              </option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Rent Amount */}
          <div>
            <label className="block font-semibold text-gray-700">Rent *</label>
            <input
              type="number"
              name="entry.1444147180"
              required
              className="w-full border-2 border-purple-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Rent Amount"
            />
          </div>

          {/* Security Deposit */}
          <div>
            <label className="block font-semibold text-gray-700">
              Security Deposit *
            </label>
            <input
              type="number"
              name="entry.1727679159"
              required
              className="w-full border-2 border-purple-300 p-2 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Security Deposit"
            />
          </div>

          {/* Full-width Submit Button */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg text-lg font-bold hover:scale-105 transition-transform duration-300"
            >
              🚀 Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Tailwind Utility Classes for Inputs
const inputStyles = `w-full border-2 p-2 rounded-lg focus:ring-2 transition-all`;
