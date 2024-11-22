type HeaderProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  };
  
  const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
    return (
      <header className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto p-4">
          {/* Tiêu đề */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Selling Page</h1>
  
          {/* Tabs */}
          <nav className="flex space-x-3 border-b-2 border-gray-300">
            {/* Selling Tab */}
            <button
              onClick={() => setActiveTab("selling")}
              className={`text-lg pb-2 ${
                activeTab === "selling"
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Selling
            </button>
  
            {/* Messages Tab */}
            <button
              onClick={() => setActiveTab("messages")}
              className={`text-lg pb-2 ${
                activeTab === "messages"
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Messages
            </button>
  
            {/* Account Tab */}
            <button
              onClick={() => setActiveTab("account")}
              className={`text-lg pb-2 ${
                activeTab === "account"
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Account
            </button>
          </nav>
        </div>
  
      </header>
    );
  };
  
  export default Header;
  