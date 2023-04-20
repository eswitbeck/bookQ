import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './reducers/bookReducer';
import appStateReducer from './reducers/appStateReducer';

export default configureStore({
  reducer: {
    books: bookReducer,
    appState: appStateReducer,
  }
});
