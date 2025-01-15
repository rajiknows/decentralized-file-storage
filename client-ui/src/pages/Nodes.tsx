import axios from "axios";
import { useEffect, useState } from "react";
import AddNodeModal from "./AddNode";

const Nodes = () => {
    const [peers, setPeers] = useState([]);
    const [error, setError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchPeers = async () => {
            try {
                const response = await axios.get("http://128.0.0.1:3000/peers");
                setPeers(response.data);
            } catch (e) {
                setError("Failed to fetch peers. Please try again later.");
            }
        };
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
                <h1 className="text-2xl font-bold text-gray-800">Peers</h1>
                <p className="mt-2 text-gray-600">
                    View and manage your peers here.
                </p>
                {error && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}
                {!error && (
                    <div className="mt-4">
                        {peers.length > 0 ? (
                            <ul className="space-y-2">
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
                        ) : (
                            <p className="mt-4 text-gray-600">
                                No peers available.
                            </p>
                        )}
                    </div>
                )}
            </div>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
                onClick={handleAddNodeClick}
            >
                Add Node
            </button>

            {isModalOpen && <AddNodeModal closeModal={closeModal} />}
        </div>
    );
};

export default Nodes;
