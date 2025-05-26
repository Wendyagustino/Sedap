import { useSearchParams } from 'react-router-dom';

export default function Form() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    return (
        <div className="p-8 min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
                {id === "customers" ? "Add New Customer" : "Add New Order"}
            </h1>

            {id === "customers" ? (
                <form className="space-y-4 bg-white p-6 rounded-lg shadow">
                    <div>
                        <label htmlFor="customerId" className="block text-sm font-medium text-gray-700">
                            Customer ID
                        </label>
                        <input
                            type="text"
                            name="customerId"
                            id="customerId"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                            Customer Name
                        </label>
                        <input
                            type="text"
                            name="customerName"
                            id="customerName"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="loyalty" className="block text-sm font-medium text-gray-700">
                            Loyalty
                        </label>
                        <select
                            name="loyalty"
                            id="loyalty"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="Bronze">Bronze</option>
                            <option value="Silver">Silver</option>
                            <option value="Gold">Gold</option>
                        </select>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            ) : id === "orders" ? (
                <form className="space-y-4 bg-white p-6 rounded-lg shadow">
                    <div>
                        <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">
                            Order ID
                        </label>
                        <input
                            type="text"
                            name="orderId"
                            id="orderId"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                            Customer Name
                        </label>
                        <input
                            type="text"
                            name="customerName"
                            id="customerName"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <select
                            name="status"
                            id="status"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="totalPrice" className="block text-sm font-medium text-gray-700">
                            Total Price
                        </label>
                        <input
                            type="number"
                            name="totalPrice"
                            id="totalPrice"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="orderDate" className="block text-sm font-medium text-gray-700">
                            Order Date
                        </label>
                        <input
                            type="date"
                            name="orderDate"
                            id="orderDate"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            ) : (
                <p className="text-red-500">ID tidak valid. Silakan kembali ke halaman utama.</p>
            )}
        </div>
    );
}
