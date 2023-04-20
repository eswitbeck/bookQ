import React from 'react';
import { useSelector } from 'react-redux';
import Year from './year.jsx';

export default () => {
  const books = useSelector(state => state.books.completed);
  const cache = {};
  let years = [];
  if (books) {
    for (const book of books) {
      const year = book.endDate.match(/\d{4}/);
      cache[year]
        ? cache[year].push(book)
        : cache[year] = [book];
      years = Object.entries(cache).sort(([a,b], [c,d]) => c - a)
    }
  }
  return (
  <section id='completedWindow'>
    <h4>Read</h4>
    {years.map(([year, booklist]) => 
      <Year key={year} year={year} booklist={booklist} />)}
  </section>
  );
};
