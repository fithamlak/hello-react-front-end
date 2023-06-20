import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/greeting';

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await axios.get(url);
    return response.data.greeting;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: { greeting: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
      });
  },
});

export default greetingSlice.reducer;
