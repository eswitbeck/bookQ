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

const testBook1 = {
  title: 'Ethics and the Limits of Philosophy',
  author: 'Williams, Bernard',
  year: 1985,
  startDate: '2023-01-15',
  endDate: '2023-05-01',
}
const testBook2 = {
  title: 'Natural Moralities',
  author: 'Wong, David',
  year: 2006,
  startDate: '2022-01-15',
  endDate: '2022-05-01',
}

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    pending: [],
    completed: [testBook1, testBook2],
  },
  reducers: {
    addBook: (state, action) => {
      const { index, book } = action.payload;
      if (index <= state.pending.length) {
        const postList = state.pending.slice(index - 1);
        postList.map(b => b.position++);
        state.pending.splice(index, 0, book);
      } else state.pending.push(book);
      state.pending.sort((a, b) => a.position - b.position);
    },
    updatePending: (state, action) => {
      const { index, field, newValue } = action.payload;
      const oldValue = state.pending[index - 1][field];
      if (field === 'position') {
        if (newValue > oldValue) {
          const postList = state.pending.slice(oldValue, newValue);
          postList.map(b => b.position--);
        } else {
          const postList = state.pending.slice(newValue - 1, oldValue);
          console.log('going down', postList);
          postList.map(b => b.position++);
        }
      }
      state.pending[index - 1][field] = newValue;
      if (field === 'position') {
        state.pending.sort((a, b) => a.position - b.position);
      }
      // if endDate
    },
  }
});

export const { addBook, updatePending } = bookSlice.actions;

export default bookSlice.reducer;
