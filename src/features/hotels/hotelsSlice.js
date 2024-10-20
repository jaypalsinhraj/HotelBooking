import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHotels } from "../../services/hotelService";

// Asynchronous thunk to fetch hotels from the service
export const searchHotels = createAsyncThunk(
  "hotels/searchHotels",
  async (query) => {
    const hotels = await fetchHotels();
    // Optionally filter hotels by the query here
    return hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(query.toLowerCase())
    );
  }
);

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchHotels.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchHotels.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hotels = action.payload;
      })
      .addCase(searchHotels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default hotelsSlice.reducer;
