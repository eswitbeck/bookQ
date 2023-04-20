import { 
  createSlice,
  createEntityAdapter,
  nanoid,
} from '@reduxjs/toolkit';
import { pending, completed } from '../testData.js';

/*
const booksAdapter = createEntityAdapter({
  selectId: book => book.position,
  sortComparer: (a, b) => a - b,
});
*/


export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    pending: pending,
    completed: completed,
  },
  reducers: {
    addBook: (state, action) => {
      const { index, book } = action.payload;
      book.id = nanoid();
      if (book.endDate) state.completed.push(book);
      else if (index <= state.pending.length) {
        const postList = state.pending.slice(index - 1);
        postList.map(b => b.position++);
        state.pending.splice(index, 0, book);
      } else state.pending.push(book);
      state.pending.sort((a, b) => a.position - b.position);
    },
    updatePending: (state, action) => {
      const { index, field, newValue } = action.payload;
      const selection = {...state.pending[index - 1]};
      if (selection.endDate || field === 'endDate') {
        const preList = selection.position - 1
                          ? state.pending.slice(0, selection.position - 1)
                          : [];
        const postList = selection.position < state.pending.length
                           ? state.pending.slice(selection.position)
                                           .map(b => (
                                             { ...b, position: b.position - 1 }
                                                     ))
                           : [];
        return {
                pending: preList.concat(postList),
                completed: state.completed.concat([{
                                                    ...selection,
                                                    [field]: newValue,
                                                    position: state.completed.length,
                                                   }]),
               };
      } else if (field === 'position') {
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
    removeBook: (state, action) => {
      const { mode, position } = action.payload;
      if (mode === 'pending') {
        state[mode].splice(position - 1, 1);
        if (state[mode].length) state[mode].slice(position - 1).map(b => b.position--);
      } else {
        state[mode].splice(position, 1);
        console.log(state[mode]);
        if (state[mode].length) state[mode].slice(position).map(b => b.position--);
      }
    },
  },
});

export const { addBook, updatePending, updateCompleted, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
