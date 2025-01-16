import axios from "axios";
import { useState, useEffect } from "react";
import AddNodeModal from "./AddNode";

const backendUrl = "http://localhost:3000";

const Dashboard = () => {
    const [peers, setPeers] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch peers function (reused from Nodes)
    const fetchPeers = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get(`${backendUrl}/peers`);
            setPeers(response.data || []); // Remove .peers since the response is already an array
        } catch (err) {
            setError(err.message || "An error occurred while fetching peers.");
        } finally {
            setLoading(false);
        }
    };

    async function connectDfsEngine() {
        try {
            const response = await axios.get(`${backendUrl}/connect`);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    // Fetch peers on component load
    useEffect(() => {
        connectDfsEngine();
        fetchPeers();
    }, []);

    const handleAddNodeClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="mt-2 text-gray-600">
                    Welcome to the Dashboard! View and manage your peers here.
                </p>

                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
                    onClick={fetchPeers}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Refresh Peers"}
                </button>

                {error && <p className="text-red-500 mt-2">{error}</p>}

                {loading ? (
                    <p className="mt-4 text-gray-600">Fetching peers...</p>
                ) : peers.length > 0 ? (
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Peers:</h2>
                        <ul className="space-y-2 mt-2">
                            {peers.map((peer, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-between p-4 bg-gray-50 border rounded-lg"
                                >
                                    <span className="text-gray-700">
                                        {peer}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    !error && (
                        <p className="mt-4 text-gray-600">
                            No peers available.
                        </p>
                    )
                )}

                <button
                    className="px-4 py-2 bg-green-500 text-white rounded mt-4"
                    onClick={handleAddNodeClick}
                >
                    Add Node
                </button>
            </div>

            {isModalOpen && <AddNodeModal closeModal={closeModal} />}
        </div>
    );
};

export default Dashboard;
