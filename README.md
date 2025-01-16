
# DFS

## Overview
The DFS (Distributed File System) project is a peer-to-peer file sharing system with two main components:
1. **DFS Engine**: The core backend system that handles file distribution and peer management.
2. **Client UI**: A web-based interface for interacting with the DFS Engine.

## Project Structure
- **dfs-engine/**: Contains the Rust-based backend implementation.
- **client-ui/**: Contains the React-based frontend implementation.

## Current Features
### DFS Engine
1. Peer-to-peer file sharing and synchronization.
2. REST API endpoints for file upload, download, and peer management.
3. Distributed Hash Table (DHT) for file location tracking.

### Client UI
1. File upload interface.
2. File listing and download functionality.
3. Peer management interface.
4. Node uptime display.

## Next Steps

### Frontend Development (client-ui/)
1. **Implement WebSockets for Real-Time Updates**:
   - Establish a WebSocket connection with the backend.
   - Use WebSockets to receive real-time updates for file uploads, peer additions, and synchronization events.

2. **Enhance Error Management**:
   - Display user-friendly error messages for failed API calls (e.g., file not found, invalid peer address).
   - Add retry mechanisms for transient errors.
   - Handle WebSocket connection errors gracefully (e.g., reconnection attempts).

### Backend Development (dfs-engine/)
1. **Set Up WebSocket Server**:
   - Add a WebSocket server to the existing backend to enable real-time communication.
   - Broadcast events like file uploads, deletions, and peer additions to connected clients.

2. **Improve Error Management**:
   - Ensure proper error handling for REST API endpoints (e.g., invalid input, internal server errors).
   - Return descriptive error messages to the client.
   - Add logging for better debugging and monitoring.

## Getting Started
### Prerequisites
- Ensure Rust and Cargo are installed for the backend.
- Ensure Node.js and npm/yarn are installed for the frontend.

### Setup
#### DFS Engine
1. Navigate to the `dfs-engine/` directory:
   ```bash
   cd dfs-engine
   ```
2. Build and run the backend:
   ```bash
   cargo run
   ```
   The backend will start and listen for incoming connections.

#### Client UI
1. Navigate to the `client-ui/` directory:
   ```bash
   cd client-ui
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000`.

### Configuration
- Update the backend API URL in the `config.js` or `.env` file in `client-ui/` to point to your DFS Engine instance.

## Contributing
- Fork the repository and create a new branch for your feature or bug fix.
- Submit a pull request with detailed information about your changes.

## Feedback
Feel free to submit issues or feature requests in the repository's issue tracker.

---
This README outlines the structure and development goals for the DFS project. With the planned updates to WebSockets and error management, the project will offer a more robust and seamless user experience. Happy coding!
