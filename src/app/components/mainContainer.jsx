import React from 'react';
import PendingWindow from './pendingWindow.jsx';
import BookCreator from './bookCreator.jsx';
import CompletedWindow from './completedWindow.jsx';

export default () => (
  <main id='mainContainer'> 
    <PendingWindow />
    <BookCreator />
    <CompletedWindow />
  </main>
);

