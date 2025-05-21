import React from "react";
import DataOrder from "../assets/orders.json";
import PageHeader from "../components/PageHeader";
import {useState} from "react";

export default function Orders() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const [showModal, setShowModal] = useState(false);
  const [newOrder, setNewOrder] = useState({
    order_id: "",
    customer_name: "",
    status: "",
    total_price: "",
    order_date: "",
  });

  const totalPages = Math.ceil(DataOrder.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentItems = DataOrder.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newOrder); 
    setShowModal(false);
    setNewOrder({
      order_id: "",
      customer_name: "",
      status: "",
      total_price: "",
      order_date: "",
    });
  };
  return (
    <div id="Orders-container">
      <PageHeader title="Orders" breadcrumb="Dashboard / Orders List">
        <button
          className="bg-hijau text-white px-4 py-2 rounded-lg mr-2"
          onClick={() => setShowModal(true)}>
          Add New Orders
        </button>
      </PageHeader>
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white p-12 rounded-lg shadow-lg w-180 relative">
            <h2 className="text-2xl mb-4 font-bold text-center">Add New Order</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="order_id"
                placeholder="Order ID"
                value={newOrder.order_id}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="customer_name"
                placeholder="Customer Name"
                value={newOrder.customer_name}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="status"
                placeholder="Status"
                value={newOrder.status}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="total_price"
                placeholder="Total Price"
                value={newOrder.total_price}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                name="order_date"
                value={newOrder.order_date}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-hijau text-white px-4 py-2 rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="p-12 bg-white shadow-md rounded-lg mt-5">
      <table className="min-w-338  border-abu text-[18px] text-left rounded-lg overflow-hidden">
        <thead className="bg-biru text-white h-15 text-[20px]">
          <tr>
            <th className="py-2 px-4 border-b">Order ID</th>
            <th className="py-2 px-4 border-b">Customer Name</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Total Price</th>
            <th className="py-2 px-4 border-b">Order Date</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((order, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{order.order_id}</td>
              <td className="py-2 px-4 border-b">{order.customer_name}</td>
              <td className="py-2 px-4 border-b">{order.status}</td>
              <td className="py-2 px-4 border-b">
                ${Number(order.total_price).toFixed(2)}
              </td>
              <td className="py-2 px-4 border-b">{order.order_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-left mt-10">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className="bg-hijau text-white px-4 py-2 rounded-lg">
            Sebelumnya
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1}
            className="bg-hijau text-white px-4 py-2 rounded-lg ml-5">
            Berikutnya
          </button>
        </div>
    </div>
    </div>
  );
}
