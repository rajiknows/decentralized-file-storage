import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Layout from "./Layout";
import AuthPage from "./pages/auth";
import Dashboard from "./pages/Dashboard";
import Storage from "./pages/Storage";
import UploadDownload from "./pages/UploadDownload";
import Nodes from "./pages/Nodes";
import Files from "./pages/Files";

function App() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect to AuthPage if not authenticated */}
        {!isAuthenticated ? (
          <>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </>
        ) : (
          <>
            {/* Layout with constant Sidebar */}
            <Route path="/" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="storage" element={<Storage />} />
              <Route
                path="upload-download"
                element={<UploadDownload />}
              />
              <Route path="nodes" element={<Nodes />} />
              <Route path="files" element={<Files />} />
              <Route
                path="/"
                element={<Navigate to="/dashboard" />}
              />
            </Route>
            {/* Redirect unknown paths to the dashboard */}
            <Route
              path="*"
              element={<Navigate to="/dashboard" />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
