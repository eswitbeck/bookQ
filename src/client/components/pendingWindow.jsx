import React from 'react';
import { useSelector } from 'react-redux';
import bookToComponent from '../utils/bookToComponent.jsx';


export default () => {
  const books = useSelector(state => state.books.pending);

  return (
    <section id='pendingWindow'>
      <h4>To Read:</h4>
      {books.map(b => 
        bookToComponent(b, 'pending'))}
    </section>
  );
}

