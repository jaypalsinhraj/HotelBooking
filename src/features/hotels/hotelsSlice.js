import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAvailableHotels } from "../../services/hotelService";

export const searchHotels = createAsyncThunk(
  "hotels/searchHotels",
  async ({ location, fromDate, toDate }) => {
    const hotels = await fetchAvailableHotels(location, fromDate, toDate);
    return hotels;
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
