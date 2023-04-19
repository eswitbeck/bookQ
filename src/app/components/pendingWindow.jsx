import React from 'react';
import Book from './book.jsx';

const testBook = {
  position: 1,
  title: 'Ethics and the Limits of Philosophy',
  author: 'Williams, Bernard',
  year: 1985,
  doi: '',
  startDate: '2022-12-25',
  endDate: '',
};

const bookToComponent = ({
                         position,
                         title,
                         author,
                         year,
                         doi,
                         startDate,
                         endDate
                        }) => {
  return <Book
           status='pending'
           position={position}
           title={title}
           author={author}
           year={year}
           doi={doi}
           startDate={startDate}
           endDate={endDate}
         />
};


export default () => (
<section id='pendingWindow'>
  <h4>To Read</h4>
  {bookToComponent(testBook)}
</section>
);

