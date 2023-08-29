// Import the necessary types from Redux
import { Store } from "redux";

// Import the RootState type you've defined
import { RootState } from "./types"; // Adjust the path as needed

// Define the type for your Redux store
declare const store: Store<RootState>;

// Export the store
export default store;
