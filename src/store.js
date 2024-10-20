import { configureStore } from "@reduxjs/toolkit";
import hotelsReducer from "./features/hotels/hotelsSlice";

// Setup the store
const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
  },
});

export default store;
