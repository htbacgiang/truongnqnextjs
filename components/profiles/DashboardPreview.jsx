// components/DashboardPreview.jsx
import React from 'react';

const DashboardPreview = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Dashboard Demo
        </h2>

        {/* Grid chứa các thẻ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Sold items */}
          <div className="rounded-lg shadow p-4 bg-white">
            <h3 className="text-lg font-semibold mb-2">Sold items</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">768</span>
              <span className="text-sm text-gray-500">products</span>
            </div>
            {/* Placeholder cho chart dạng vòng tròn */}
            <div className="mt-4 w-full h-24 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Donut chart
            </div>
          </div>

          {/* Card 2: Thẻ người dùng */}
          <div className="rounded-lg shadow p-4 bg-white flex flex-col">
            <div className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="text-md font-semibold">Lewis Rivera Junior</h4>
                <p className="text-sm text-gray-500">Fugit</p>
              </div>
            </div>
            <div className="flex mt-4 space-x-2">
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded transition">
                Start chat
              </button>
              <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-sm py-2 rounded transition">
                View cart
              </button>
            </div>
          </div>

          {/* Card 3: Volume of sales */}
          <div className="rounded-lg shadow p-4 bg-white">
            <h3 className="text-lg font-semibold mb-2">Volume of sales</h3>
            <div className="mt-4 w-full h-24 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Line chart
            </div>
          </div>

          {/* Card 4: Visitors source */}
          <div className="rounded-lg shadow p-4 bg-white">
            <h3 className="text-lg font-semibold mb-2">Visitors source</h3>
            <p className="text-sm text-green-600 mb-2">
              +6 <span className="text-gray-500">cheer-up</span> <br />
              visitors per day
            </p>
            <div className="mt-4 w-full h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Bar chart
            </div>
          </div>

          {/* Card 5: Price */}
          <div className="rounded-lg shadow p-4 bg-white">
            <h3 className="text-lg font-semibold mb-2">Price</h3>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
                value="5 USD"
                readOnly
              />
              <button className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded transition">
                Apply
              </button>
            </div>
            <div className="mt-4 w-full h-10 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Price chart
            </div>
          </div>

          {/* Card 6: New messages */}
          <div className="rounded-lg shadow p-4 bg-white flex flex-col">
            <h3 className="text-lg font-semibold mb-2">New messages</h3>
            <div className="flex-1">
              <p className="text-sm text-gray-700 mb-2">
                Dr. Fareed: You need to come and see the reception desk
              </p>
              <p className="text-sm text-gray-700">
                Tom Glover: When will it be convenient for you to come?
              </p>
            </div>
            <div className="flex mt-4 space-x-2">
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded transition">
                Start chat
              </button>
              <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-sm py-2 rounded transition">
                Archive
              </button>
            </div>
          </div>

          {/* Card 7: Product rating */}
          <div className="rounded-lg shadow p-4 bg-white">
            <h3 className="text-lg font-semibold mb-2">Product rating</h3>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">4.8</span>
              <span className="text-sm text-gray-500">/ 5.0</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">133 reviews</p>
            <div className="mt-4 w-full h-8 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Rating distribution
            </div>
          </div>

          {/* Card 8: Sales pulse */}
          <div className="rounded-lg shadow p-4 bg-white">
            <h3 className="text-lg font-semibold mb-2">Sales pulse</h3>
            <div className="mt-4 w-full h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Pulse chart
            </div>
          </div>

          {/* Card 9: Date picker */}
          <div className="rounded-lg shadow p-4 bg-white">
            <h3 className="text-lg font-semibold mb-2">Date picker</h3>
            <div className="mt-4 w-full h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400">
              Calendar UI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
