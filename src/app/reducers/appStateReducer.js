import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { crossref } from '../../api/crossref.js';


const fetchMatches = createAsyncThunk(
  'appState/fetchMatchesStatus',
  async () => null
);

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
  },
  extraReducers: builder => {
    builder.addCase(fetchMatches.pending, (state, action) => {
    })
  },
  extraReducers: builder => {
    builder.addCase(fetchMatches.rejected, (state, action) => {
    })
  },
  extraReducers: builder => {
    builder.addCase(fetchMatches.fulfilled, (state, action) => {
    })
  },
});

export const { setPopup, changeSelection } = appStateSlice.actions;

export default appStateSlice.reducer;
