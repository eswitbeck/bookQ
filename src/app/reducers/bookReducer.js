import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    pending: [],
    completed: [],
  },
  reducers: {
    doNothing: state => state,
  }
});

export default bookSlice.reducer;
