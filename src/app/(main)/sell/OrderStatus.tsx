const OrderStatus: React.FC = () => {
  const orders = [
    {
      id: 1,
      productName: "Product A",
      status: "Processing",
      quantityOrdered: 2,
      image: "/path/to/imageA.jpg",
      address: "123 Street, City, Country",
      orderDate: "2024-11-25T10:30:00",
      purchaseDate: "2024-11-20T14:00:00",
    },
    {
      id: 2,
      productName: "Product B",
      status: "Delivered",
      quantityOrdered: 1,
      image: "/path/to/imageB.jpg",
      address: "456 Avenue, Town, Country",
      orderDate: "2024-11-22T12:45:00",
      purchaseDate: "2024-11-18T09:00:00",
    },
  ];

  return (
    <div className="bg-white p-2">
      {/* Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-7 bg-gray-300 p-2 text-sm font-bold text-gray-700">
          <div className="text-center">Product</div>
          <div className="text-center">Status</div>
          <div className="text-center">Quantity Ordered</div>
          <div className="text-center">Address</div>
          <div className="text-center">Order Date</div>
          <div className="text-center">Purchase Date</div>
          <div className="text-center">Actions</div>
        </div>

        {/* Rows */}
        {orders.map((order, index) => (
          <div
            key={order.id}
            className={`grid grid-cols-7 items-center p-3 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            } border-b border-gray-300`}
          >
            {/* Product Name + Image */}
            <div className="flex flex-col items-center space-y-2">
              <img src={order.image} alt={order.productName} className="w-16 h-16 object-cover" />
              <span className="text-sm text-gray-800">{order.productName}</span>
            </div>

            {/* Status */}
            <div className="text-center text-sm text-gray-600">{order.status}</div>

            {/* Quantity Ordered */}
            <div className="text-center text-sm text-gray-600">{order.quantityOrdered}</div>

            {/* Address */}
            <div className="text-center text-sm text-gray-600">{order.address}</div>

            {/* Order Date */}
            <div className="flex flex-col items-center text-sm text-gray-600">
              <span>{new Date(order.orderDate).toLocaleDateString()}</span>
              <span>{new Date(order.orderDate).toLocaleTimeString()}</span>
            </div>

            {/* Purchase Date */}
            <div className="flex flex-col items-center text-sm text-gray-600">
              <span>{new Date(order.purchaseDate).toLocaleDateString()}</span>
              <span>{new Date(order.purchaseDate).toLocaleTimeString()}</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col items-center gap-2">
              <button className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded hover:bg-yellow-500 w-24">
                Change
              </button>
              <button className="bg-red-500 text-white font-semibold px-4 py-1 rounded hover:bg-red-600 w-24">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatus;
