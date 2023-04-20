import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
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
     key={nanoid()}
     position={position}
     title={title}
     author={author}
     year={year}
     doi={doi}
     startDate={startDate}
     endDate={endDate}
   />
);
