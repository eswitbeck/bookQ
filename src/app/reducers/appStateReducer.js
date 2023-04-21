import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    /* closed | loading | confirmingBook | selectingSources */
    popupStatus: 'closed',
    selection: {},
  },
  reducers: {
    setPopup: (state, action) => {
      state.popupStatus = action.payload;
      if (state.popupStatus === 'closed') state.selection = {};
    },
    changeSelection: (state, action) => {
      state.selection = action.payload;
    },
  }
});

export const { setPopup, changeSelection } = appStateSlice.actions;

export default appStateSlice.reducer;
