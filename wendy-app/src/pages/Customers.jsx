import customersData from "../components/Customers.json";
import { Link } from "react-router-dom";

export default function Customers() {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 flex justify-between items-center mb-6">
                Customers List
                <Link
                to="/form?id=customers"
                className="flex cursor-pointer items-center rounded-xl p-4 space-x-2 bg-green-400 text-white hover:text-white hover:bg-green-600 hover:font-extrabold"
                >
                Add Button
                </Link>
            </h1>

            
            <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="min-w-full bg-white text-sm text-left">
                    <thead className="bg-blue-600 text-white sticky top-0 z-10">
                        <tr>
                            <th className="py-4 px-6">Customer ID</th>
                            <th className="py-4 px-6">Name</th>
                            <th className="py-4 px-6">Email</th>
                            <th className="py-4 px-6">Phone</th>
                            <th className="py-4 px-6">Loyalty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customersData.map((item, index) => (
                            <tr
                                key={index}
                                className={`transition duration-200 ease-in-out hover:bg-blue-50 ${
                                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                }`}
                            >
                                <td className="py-4 px-6 font-medium text-gray-700">{item.customerId}</td>
                                <td className="py-4 px-6 text-gray-800">{item.customerName}</td>
                                <td className="py-4 px-6 text-gray-600">{item.email}</td>
                                <td className="py-4 px-6 text-gray-600">{item.phone}</td>
                                <td className="py-4 px-6">
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                            item.loyalty === "Gold"
                                                ? "bg-yellow-200 text-yellow-800"
                                                : item.loyalty === "Silver"
                                                ? "bg-gray-200 text-gray-800"
                                                : "bg-orange-200 text-orange-800"
                                        }`}
                                    >
                                        {item.loyalty}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
