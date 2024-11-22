const OrderStatus: React.FC = () => {
    const orders = [
      { id: 1, productName: "Product A", status: "Processing", quantityOrdered: 2, image: "/path/to/imageA.jpg" },
      { id: 2, productName: "Product B", status: "Delivered", quantityOrdered: 1, image: "/path/to/imageB.jpg" },
    ];
  
    return (
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Status</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg shadow-sm overflow-hidden">
              <img src={order.image} alt={order.productName} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{order.productName}</h3>
                <p className="text-gray-500 text-sm">Status: {order.status}</p>
                <p className="text-sm text-gray-500">Quantity: {order.quantityOrdered}</p>
                <button className="mt-4 w-full text-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OrderStatus;
  