import { useState } from "react";

type SidebarProps = {
  activeSubPage: string;
  setActiveSubPage: (subPage: string) => void;
};

const Sidebar = ({ activeSubPage, setActiveSubPage }: SidebarProps) => {
  const [isOrdersOpen, setIsOrdersOpen] = useState(false); // Track if the "Orders" menu is open

  // Toggle the visibility of the "Orders" sub-menu
  const toggleOrdersMenu = () => {
    setIsOrdersOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full h-full bg-white border-r border-gray-300 p-6">
      <ul className="space-y-4 p-4 ml-24">
        {/* Add products */}
        <li>
          <button
            onClick={() => setActiveSubPage("addProduct")}
            className={`text-lg ${
              activeSubPage === "addProduct"
                ? "font-semibold underline text-black"
                : "text-gray-700 hover:underline"
            }`}
          >
            Add products
          </button>
        </li>

        {/* Product list */}
        <li>
          <button
            onClick={() => setActiveSubPage("productList")}
            className={`text-lg ${
              activeSubPage === "productList"
                ? "font-semibold underline text-black"
                : "text-gray-700 hover:underline"
            }`}
          >
            Product list
          </button>
        </li>

        {/* Orders */}
        <li>
          <button
            onClick={toggleOrdersMenu}
            className={`text-lg text-gray-700 hover:underline`}
          >
            Orders
          </button>

          {/* Toggleable Submenu for Orders */}
          {isOrdersOpen && (
            <ul className="ml-6 mt-2 space-y-2 text-sm text-gray-600">
              <li
                className={`hover:underline cursor-pointer ${
                  activeSubPage === "allOrders" ? "font-semibold underline text-black" : ""
                }`}
                onClick={() => setActiveSubPage("allOrders")}
              >
                All orders
              </li>
              <li
                className={`hover:underline cursor-pointer ${
                  activeSubPage === "shippingInfo" ? "font-semibold underline text-black" : ""
                }`}
                onClick={() => setActiveSubPage("shippingInfo")}
              >
                Shipping info
              </li>
              <li
                className={`hover:underline cursor-pointer ${
                  activeSubPage === "refund" ? "font-semibold underline text-black" : ""
                }`}
                onClick={() => setActiveSubPage("refund")}
              >
                Refund
              </li>
            </ul>
          )}
        </li>

        {/* Sale offers */}
        <li>
          <button
            onClick={() => setActiveSubPage("saleOffers")}
            className={`text-lg ${
              activeSubPage === "saleOffers"
                ? "font-semibold underline text-black"
                : "text-gray-700 hover:underline"
            }`}
          >
            Sale offers
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
