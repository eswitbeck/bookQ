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
      const selection = {...state.pending[index - 1]};
      if (field === 'position') {
        /* check bounds of update */
        if (newValue > state.pending.length) return state;
        if (newValue < 1) return state;

        const oldValue = selection.position;

        if (newValue > oldValue) {
          const preList = oldValue - 1 ? state.pending.slice(0, oldValue - 1) : [];
          const midList = state.pending
                       .slice(oldValue, newValue)
                       .map(b => ({ ...b, position: b.position - 1 }));
          /* updated selection goes here */
          const postList = newValue < state.pending.length
                             ? state.pending.slice(newValue)
                             : [];
          return {
                  ...state,
                  pending: preList.concat(
                                          midList,
                                          [{...selection, position: newValue}],
                                          postList
                                         )
                                  .sort((a, b) => a.position - b.position),
                 };
        } else {
          const preList = newValue - 1 ? state.pending.slice(0, newValue - 1) : [];
          /* updated selection goes here */
          const midList = state.pending
                       .slice(newValue - 1, oldValue - 1)
                       .map(b => ({ ...b, position: b.position + 1 }));
          const postList = oldValue < state.pending.length
                             ? state.pending.slice(oldValue)
                             : [];
          return {
                  ...state,
                  pending: preList.concat(
                                          [{...selection, position: newValue}],
                                          midList,
                                          postList
                                         )
                                  .sort((a, b) => a.position - b.position),
                 };
        }
      } else {
  //      if (!state.pending[index - 1].endDate) {
//    },
        return {
                ...state,
                pending: state.pending.slice(0, index - 1)
                                      .concat(
                                              [{...selection, [field]: newValue}],
                                              state.pending.slice(index)
                                      ),
               };
      }
    },


//      state.pending[index - 1][field] = newValue;
//      if (field === 'endDate') {
//        const updatedBook = state.pending[index - 1];
//        state.pending.splice(index - 1, 1);
//        updatedBook.position = state.completed.length;
//        state.completed.push(updatedBook);
//        if (state.pending.length) {
//          const preList = index - 1 ? state.pending.slice(0, index - 1) : [];
//          const postList = state.pending.slice(index - 1);
//          postList.map(b => console.log(b.position--));
//          state.pending = preList.concat(postList);
//          const fixList = state.pending.slice(index - 1).map(x => {position: 0});
//         console.log(fixList);
//         state.pending = preList.concat(fixList);
//          fixList.map(b => --b.position);
//      }
//    },
//      if (field === 'position' || field === 'endDate') {
//        state.pending.sort((a, b) => a.position - b.position);
//      }
//    },
    updateCompleted: (state, action) => {
      const { index, field, newValue } = action.payload;
      state.completed[index][field] = newValue;
      if (!state.completed[index].endDate) {
        const updatedBook = state.completed[index];
        state.completed.splice(index, 1);
        if (state.completed.length) {
          const postList = state.completed.slice(index);
          postList.map(b => b.position--);
        }
        updatedBook.position = state.pending.length + 1;
        state.pending.push(updatedBook);
      }
    },
  },
});

export const { addBook, updatePending, updateCompleted } = bookSlice.actions;

export default bookSlice.reducer;
