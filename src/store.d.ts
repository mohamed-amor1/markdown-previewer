// Import the necessary types from Redux
import { Store } from "redux";

// Import the RootState type
import { RootState } from "./types";

// Define the type of Redux store
declare const store: Store<RootState>;

// Export the store
export default store;
