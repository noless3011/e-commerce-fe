const ProductList: React.FC = () => {
    const products = [
      {
        id: 1,
        name: "This will be the name of the product, which can be about this long (Maybe with some bracket like this)",
        totalSales: 123,
        price: 1233.23,
        categories: ["New", "Popular", "Category 1"],
        amountLeft: 1203,
      },
      {
        id: 2,
        name: "This will be the name of the product, which can be about this long (Maybe with some bracket like this)",
        totalSales: 123,
        price: 1233.23,
        categories: ["New", "Popular", "Category 2"],
        amountLeft: 1203,
      },
      {
        id: 3,
        name: "This will be the name of the product, which can be about this long (Maybe with some bracket like this)",
        totalSales: 123,
        price: 1233.23,
        categories: ["Featured", "Bestseller"],
        amountLeft: 1203,
      },
    ];
  
    return (
      <div className="bg-white p-2">
        {/* Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-6 bg-gray-300 p-2 text-sm font-bold text-gray-700">
            <div>Product name</div>
            <div className="text-center">Total sales</div>
            <div className="text-center">Price</div>
            <div className="text-center">Categories</div>
            <div className="text-center">Amount left</div>
            <div className="text-center">Actions</div>
          </div>
  
          {/* Rows */}
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`grid grid-cols-6 items-center p-3 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } border-b border-gray-300`}
            >
              {/* Product Name */}
              <div className="text-sm text-gray-800">
                {product.name}
              </div>
  
              {/* Total Sales */}
              <div className="text-center text-sm text-gray-600">{product.totalSales}</div>
  
              {/* Price */}
              <div className="text-center text-sm font-medium text-gray-800">${product.price.toFixed(2)}</div>
  
              {/* Categories */}
              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-2">
                  {product.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
  
              {/* Amount Left */}
              <div className="text-center text-sm text-gray-600">{product.amountLeft}</div>
  
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
  
  export default ProductList;
  