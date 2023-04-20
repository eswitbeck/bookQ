import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    popup: false,
  },
  reducers: {
    toggle: state => {
      state.popup = !state.popup;
    },
  }
});

export const { toggle } = appStateSlice.actions;

export default appStateSlice.reducer;
