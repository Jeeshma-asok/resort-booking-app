import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// function to submit booking
export const submitBooking = createAsyncThunk(
  'booking/submitBooking',
  async (bookingData, { rejectWithValue }) => {
    try {
      const res = await axios.post('http://localhost:5000/api/bookings', bookingData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// function to get bookings
export const fetchBookings = createAsyncThunk(
  'booking/fetchBookings',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('http://localhost:5000/api/bookings');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookings: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearSuccess: (state) => { state.success = ""; },
    clearError: (state) => { state.error = ""; },
  },
  extraReducers: (builder) => {
    builder
      // submit booking
      .addCase(submitBooking.pending, (state) => {
        state.loading = true;
        state.success = "";
        state.error = "";
      })
      .addCase(submitBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.success = "Booking successful!";
        state.bookings.push(action.payload);
      })
      .addCase(submitBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Booking failed";
      })

      // fetch bookings
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch bookings';
      });
  },
});

export const { clearSuccess, clearError } = bookingSlice.actions;
export default bookingSlice.reducer;
