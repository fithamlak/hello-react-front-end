import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: '',
  isLoading: true,
};

const url = 'http://localhost:3000/api/greeting';

export const getRandomGreeting = createAsyncThunk(
  'greetings/getRandomGreeting',
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: {
    [getRandomGreeting.pending]: (state) => {
      state.isLoading = true;
    },
    [getRandomGreeting.fulfilled]: (state, action) => {
      state.greeting = action.payload;
      state.isLoading = false;
    },
    [getRandomGreeting.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default greetingsSlice.reducer;
