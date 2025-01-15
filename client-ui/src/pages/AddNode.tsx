import React, { useState } from "react";
import axios from "axios";

const AddNodeModal = ({ closeModal }: any) => {
    const [peerAddr, setPeerAddr] = useState("");

    const handleAddNode = async () => {
        try {
            const response = await axios.post("http://localhost:3000/peers/", {
                addr: peerAddr,
            });
            if (response.status === 200) {
                alert("Node added successfully!");
                closeModal(); // Close the modal after successful addition
            } else {
                alert("Failed to add node.");
            }
        } catch (error) {
            alert("An error occurred while adding the node.");
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Add Node</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Peer Address</label>
                    <input
                        type="text"
                        value={peerAddr}
                        onChange={(e) => setPeerAddr(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Enter peer address"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handleAddNode}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Node
                    </button>
                    <button
                        onClick={closeModal}
                        className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNodeModal;
