import React from "react";

const ShippingInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Info</h2>
      <div className="space-y-4">
        {/* Store Name */}
        <div>
          <label className="block text-gray-600 text-sm font-medium">Store Name</label>
          <p className="text-gray-800 text-base">Store</p>
        </div>

        {/* Owner's Name */}
        <div>
          <label className="block text-gray-600 text-sm font-medium">Owner's Name</label>
          <p className="text-gray-800 text-base">Me</p>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-600 text-sm font-medium">Phone Number</label>
          <p className="text-gray-800 text-base">+1 (123) 456-7890</p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600 text-sm font-medium">Email</label>
          <p className="text-gray-800 text-base">me@example.com</p>
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-600 text-sm font-medium">Address</label>
          <p className="text-gray-800 text-base">123 Hanoi</p>
        </div>
      </div>

      {/* Edit Button */}
      <button
        className="mt-6 bg-darkgreen hover:bg-green text-white font-medium py-2 px-4 rounded-md"
        onClick={() => alert("Edit functionality coming soon!")}
      >
        Edit
      </button>
    </div>
  );
};

export default ShippingInfo;
