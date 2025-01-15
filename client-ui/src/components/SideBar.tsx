import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const links = [
        { name: "Dashboard", path: "/dashboard" },
        // { name: "Storage", path: "/storage" },
        { name: "Upload", path: "/upload-download" },
        // { name: "Nodes", path: "/nodes" },
        { name: "Files", path: "/files" },
    ];

    return (
        <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
            <h1 className="text-xl font-bold p-4 border-b border-gray-700">
                DFS-Rust
            </h1>
            <nav className="flex-1">
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `block px-4 py-3 hover:bg-gray-700 ${
                                isActive ? "bg-gray-700" : ""
                            }`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
