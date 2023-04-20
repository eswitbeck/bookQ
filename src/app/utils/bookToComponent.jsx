import React from 'react';
import Book from '../components/book.jsx';

export default ({
                 id,
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
     key={id}
     position={position}
     title={title}
     author={author}
     year={year}
     doi={doi}
     startDate={startDate}
     endDate={endDate}
   />
);
