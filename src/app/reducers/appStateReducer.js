import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    popup: false,
    selection: {},
  },
  reducers: {
    toggle: state => {
      state.popup = !state.popup;
      if (!state.popup) state.selection = {};
    },
    changeSelection: (state, action) => {
      state.selection = action.payload;
    },
  }
});

export const { toggle, changeSelection } = appStateSlice.actions;

export default appStateSlice.reducer;
