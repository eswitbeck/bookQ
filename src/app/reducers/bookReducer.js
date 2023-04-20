import { 
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

/*
const booksAdapter = createEntityAdapter({
  selectId: book => book.position,
  sortComparer: (a, b) => a - b,
});
*/

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    pending: [],
    completed: [],
  },
  reducers: {
    /* payload: { index, book } */
    addBook: (state, action) => {
      const { index, book } = action.payload;
      if (index <= state.pending.length) {
        const postList = state.pending.slice(index - 1);
        postList.map(b => b.position++);
        state.pending.splice(index, 0, book);
      } else state.pending.push(book);
      state.pending.sort((a, b) => a.position - b.position);
    }
  }
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
