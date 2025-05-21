import DataCustomer from "../assets/customer.json";
import PageHeader from "../components/PageHeader";
import {useState} from "react";
export default function Customer (){
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [customers, setCustomers] = useState(DataCustomer); // untuk handle data baru
  const [newCustomer, setNewCustomer] = useState({
    customer_id: "",
    customer_name: "",
    email: "",
    phone: "",
    loyalty: ""
  });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentItems = customers.slice(startIndex, startIndex + itemsPerPage);

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
    setNewCustomer((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleAddCustomer = () => {
    setCustomers((prev) => [...prev, newCustomer]);
    setNewCustomer({
      customer_id: "",
      customer_name: "",
      email: "",
      phone: "",
      loyalty: ""
    });
    setShowModal(false);
  };
    return(
         <div id="customer-container">
                  <PageHeader title="Customer" breadcrumb="Dashboard / Customer List">
                  <button
                    id="add-button"
                    className="bg-hijau text-white px-4 py-2 rounded-lg mr-2"
                    onClick={() => setShowModal(true)}>
                    Add New Customer
                  </button>
                </PageHeader>
                  {showModal && (
                  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-white p-12 rounded-lg shadow-lg w-180">
                      <h2 className="text-2xl mb-4 font-bold text-center">Add New Customer</h2>
                      <div className="space-y-4">
                      <input
                          type="text"
                          name="customer_id"
                          placeholder="Customer ID"
                          value={newCustomer.customer_id}
                          onChange={handleInputChange}
                          className="w-full border px-4 py-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          name="customer_name"
                          placeholder="Customer Name"
                          value={newCustomer.customer_name}
                          onChange={handleInputChange}
                          className="w-full border px-4 py-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={newCustomer.email}
                          onChange={handleInputChange}
                          className="w-full border px-4 py-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          value={newCustomer.phone}
                          onChange={handleInputChange}
                          className="w-full border px-4 py-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          name="loyalty"
                          placeholder="Loyalty"
                          value={newCustomer.loyalty}
                          onChange={handleInputChange}
                          className="w-full border px-4 py-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex justify-end mt-6 space-x-3">
                        <button
                          className="bg-gray-400 px-4 py-2 rounded text-white"
                          onClick={() => setShowModal(false)}>
                          Cancel
                        </button>
                        <button
                          className="bg-hijau text-white px-4 py-2 rounded"
                          onClick={handleAddCustomer}>
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                  <div className="p-12 bg-white shadow-md rounded-lg mt-5">
                  <table className="min-w-338  border-abu text-[18px] text-left rounded-lg overflow-hidden">
                <thead className="bg-biru text-white h-15 text-[20px]">
                  <tr>
                    <th className="py-2 px-4 border-b">Customer ID</th>
                    <th className="py-2 px-4 border-b">Customer Name</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Phone</th>
                    <th className="py-2 px-4 border-b">Loyalty</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((cust, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{cust.customer_id}</td>
                      <td className="py-2 px-4 border-b">{cust.customer_name}</td>
                      <td className="py-2 px-4 border-b">{cust.email}</td>
                      <td className="py-2 px-4 border-b">
                        {Number(cust.phone).toFixed(2)}
                      </td>
                      <td className="py-2 px-4 border-b">{cust.loyalty}</td>
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
    )
}