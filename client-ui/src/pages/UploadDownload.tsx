import axios from "axios";
import { useState } from "react";

const UploadDownload = () => {
    const [filepath, setFilepath] = useState("");
    const [error, setError] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (e: any) => {
        setFilepath(e.target.value);
        setError("");
    };

    const handleUpload = async () => {
        if (!filepath) {
            setError("Please select a file to upload.");
            return;
        }
        setIsUploading(true);
        try {
            const response = await axios.post("http://127.0.0.1:3000/files", {
                path: filepath,
            });
            console.log("Upload response:", response.data);
            alert("File uploaded successfully!");
            setError("");
        } catch (err) {
            console.error("Upload error:", err);
            setError(
                err.response?.data ||
                    "Failed to upload the file. Please check if the file exists and try again.",
            );
        } finally {
            setIsUploading(false);
        }
    };
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Upload File Path
                </h1>
                <p className="mt-2 text-gray-600">
                    Select a file to send its path to the backend.
                </p>

                <div className="mt-4">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="block w-full p-2 border rounded-lg"
                    />
                </div>

                {error && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 disabled:opacity-50"
                    onClick={handleUpload}
                    disabled={isUploading}
                >
                    {isUploading ? "Uploading..." : "Send File Path"}
                </button>
            </div>
        </div>
    );
};

export default UploadDownload;
