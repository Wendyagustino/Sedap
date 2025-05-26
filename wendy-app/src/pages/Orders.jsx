import ordersData from "../components/Orders.json";
import { Link } from "react-router-dom";

export default function Orders() {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 flex justify-between items-center mb-6">
                Orders List
                <Link
                to="/form?id=orders"
                className="flex cursor-pointer items-center rounded-xl p-4 space-x-2 bg-green-400 text-white hover:text-white hover:bg-green-600 hover:font-extrabold"
                >
                Add Button
                </Link>
            </h1>
            <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="min-w-full bg-white text-sm text-left">
                    <thead className="bg-blue-600 text-white sticky top-0 z-10">
                        <tr>
                            <th className="py-4 px-6">Order ID</th>
                            <th className="py-4 px-6">Customer Name</th>
                            <th className="py-4 px-6">Status</th>
                            <th className="py-4 px-6">Total Price</th>
                            <th className="py-4 px-6">Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map((item, index) => (
                            <tr
                                key={index}
                                className={`transition duration-200 ease-in-out hover:bg-blue-50 ${
                                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                }`}
                            >
                                <td className="py-4 px-6 font-medium text-gray-700">{item.orderId}</td>
                                <td className="py-4 px-6 text-gray-800">{item.customerName}</td>
                                <td className="py-4 px-6 text-gray-600">{item.status}</td>
                                <td className="py-4 px-6 text-gray-600">
                                    ${item.totalPrice.toLocaleString()}
                                </td>
                                <td className="py-4 px-6 text-gray-600">{item.orderDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
