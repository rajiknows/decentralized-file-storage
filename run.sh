
#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Go to dfs-engine, build and run the Rust backend
echo "Building and running dfs-engine..."
cd dfs-engine
cargo build
cargo run & # Run the backend in the background
ENGINE_PID=$! # Store the PID of the dfs-engine process
cd ..

# Go to client-ui, install dependencies and start the development server
echo "Installing dependencies and starting client-ui..."
cd client-ui
yarn install
yarn dev & # Run the frontend in the background
CLIENT_PID=$! # Store the PID of the client-ui process

# Wait for frontend to start and display the clickable link
sleep 2 # Give yarn dev a moment to start
echo -e "\nFrontend started! Open the following link in your browser:"
echo -e "\033[1;34mhttp://localhost:5173\033[0m\n" # Blue clickable link in most terminals
cd ..

# Handle termination signals to clean up background processes
cleanup() {
  echo "Stopping services..."
  kill $ENGINE_PID $CLIENT_PID
  wait $ENGINE_PID $CLIENT_PID 2>/dev/null
}
trap cleanup EXIT

# Wait for background processes to finish
wait
