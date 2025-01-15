import axios from "axios";
import { useEffect, useState } from "react";

const Files = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(
          "http://128.0.0.1:3000/files",
        );
        setFiles(response.data);
      } catch (e) {
        setError("Failed to fetch files. Please try again later.");
      }
    };
    fetchFiles();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800">Files</h1>
        <p className="mt-2 text-gray-600">
          View and manage your files here.
        </p>
        {error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        {!error && (
          <div className="mt-4">
            {files.length > 0 ? (
              <ul className="space-y-2">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 border rounded-lg"
                  >
                    <span className="text-gray-700">
                      {file}
                    </span>
                    <button className="text-blue-500 hover:underline">
                      Download
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-600">
                No files available.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Files;
