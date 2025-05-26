import { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("https://dummyjson.com/users")
            .then((response) => {
                setUsers(response.data.users);
            })
            .catch((err) => {
                setError("Failed to fetch users.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

       return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 flex justify-between items-center mb-6">
                Users List
            </h1>

            <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="min-w-full bg-white text-sm text-left">
                    <thead className="bg-blue-600 text-white sticky top-0 z-10">
                        <tr>
                            <th className="py-4 px-6">User ID</th>
                            <th className="py-4 px-6">Name</th>
                            <th className="py-4 px-6">Username</th>
                            <th className="py-4 px-6">Email</th>
                            <th className="py-4 px-6">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => (
                            <tr
                                key={index}
                                className={`transition duration-200 ease-in-out hover:bg-blue-50 ${
                                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                }`}
                            >
                                <td className="py-4 px-6 font-medium text-gray-700">{item.id}</td>
                                <td className="py-4 px-6 text-gray-800">{item.firstName} {item.lastName}</td>
                                <td className="py-4 px-6 text-gray-600">{item.username}</td>
                                <td className="py-4 px-6 text-gray-600">{item.email}</td>
                                <td className="py-4 px-6 text-gray-600">{item.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
