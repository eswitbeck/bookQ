import React from 'react';
import bookToComponent from '../utils/bookToComponent.jsx';

const testBook = {
  position: 1,
  title: 'Ethics and the Limits of Philosophy',
  author: 'Williams, Bernard',
  year: 1985,
  doi: '',
  startDate: '2022-12-25',
  endDate: '',
};

export default () => (
<section id='pendingWindow'>
  <h4>To Read</h4>
  {bookToComponent(testBook, 'pending')}
</section>
);

