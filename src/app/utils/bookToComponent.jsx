import React from 'react';
import Book from '../components/book.jsx';

export default ({
                 position,
                 title,
                 author,
                 year,
                 doi,
                 startDate,
                 endDate
                },
                mode) => (
  <Book
     mode={mode}
     key={position}
     position={position}
     title={title}
     author={author}
     year={year}
     doi={doi}
     startDate={startDate}
     endDate={endDate}
   />
);
