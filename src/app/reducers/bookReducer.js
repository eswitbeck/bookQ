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
  position: 0,
  title: 'Ethics and the Limits of Philosophy',
  author: 'Williams, Bernard',
  year: 1985,
  doi: '',
  startDate: '2023-01-15',
  endDate: '2023-05-01',
}
const testBook2 = {
  position: 1,
  title: 'Natural Moralities',
  author: 'Wong, David',
  year: 2006,
  doi: '',
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
      if (field === 'position') {
        const oldValue = state.pending[index - 1][field];
        if (newValue > state.pending.length) return state;
        if (newValue > oldValue) {
          const postList = state.pending.slice(oldValue, newValue);
          postList.map(b => b.position--);
        } else {
          const postList = state.pending.slice(newValue - 1, oldValue);
          postList.map(b => b.position++);
        }
      }
      state.pending[index - 1][field] = newValue;
      if (field === 'endDate') {
        const updatedBook = state.pending[index - 1];
        state.pending.splice(index - 1, 1);
        updatedBook.position = state.completed.length;
        state.completed.push(updatedBook);
        if (state.pending.length) {
          const postList = state.pending.slice(index - 1);
      //    postList.map(b => {b.position--});
        }
      }
      if (field === 'position' || field === 'endDate') {
        state.pending.sort((a, b) => a.position - b.position);
      }
    },
    updateCompleted: (state, action) => {
      const { index, field, newValue } = action.payload;
      state.completed[index][field] = newValue;
      if (!state.completed[index].endDate) {
        const updatedBook = state.completed[index];
        state.completed.splice(index, 1);
        if (state.completed.length) {
          const postList = state.completed.slice(index - 1);
          /* buggy also */
          postList.map(b => {b.position--});
        }
        updatedBook.position = state.pending.length + 1;
        state.pending.push(updatedBook);
      }
    },
  }
});

export const { addBook, updatePending, updateCompleted } = bookSlice.actions;

export default bookSlice.reducer;
