import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulated API call
const fetchHotels = async (query) => {
    const hotels = [
        { id: 1, name: 'Hotel Sunshine', location: 'New York' },
        { id: 2, name: 'Sea View Resort', location: 'California' },
        { id: 3, name: 'Mountain Escape', location: 'Colorado' },
    ];

    return hotels.filter(hotel => hotel.name.toLowerCase().includes(query.toLowerCase()));
};

// Thunk for async hotel search
export const searchHotels = createAsyncThunk('hotels/searchHotels', async (query) => {
    const response = await fetchHotels(query);
    return response;
});

// Create slice
const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: {
        hotels: [],
        status: 'idle',  // For handling loading states if needed
        error: null,
    },
    reducers: {
        // We can define synchronous actions if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchHotels.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchHotels.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.hotels = action.payload;
            })
            .addCase(searchHotels.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default hotelsSlice.reducer;
