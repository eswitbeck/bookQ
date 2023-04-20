import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../reducers/bookReducer.js';

export default props => {
  const [position, setPosition] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [doi, setDoi] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const bookCount = useSelector(state => state.books.pending.length);

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (position) {
      dispatch(
        addBook({
          index: position,    // index
          book: {
            position,         // book
            title,
            author,
            year,
            doi,
            startDate,
            endDate
          },
        })
      );
      setPosition(1);
      setTitle('');
      setAuthor('');
      setYear(0);
      setDoi('');
      setStartDate('');
      setEndDate('');
    }
  }

  return (
    <div id='bookCreator' >
      <h4>Add:</h4>
      <form className='book'> 
        <input
          type='number'
          name='position'
          value={position}
          min={1}
          max={bookCount + 1}
          onChange={ e => setPosition(Number(e.target.value)) }
        />
        <input
          type='text'
          name='title'
          value={title}
          placeholder='title'
          onChange={ e => setTitle(e.target.value) }
        />
        <input
          type='text'
          name='author'
          value={author}
          placeholder='author'
          onChange={ e => setAuthor(e.target.value) }
        />
        <input
          type='text'
          name='publicationYear'
          value={year}
          placeholder='year'
          onChange={ e => setYear(Number(e.target.value)) }
        />
        <input
          type='text'
          name='doi'
          value={doi}
          placeholder='doi'
          onChange={ e => setDoi(e.target.value) }
        />
        <label>Started:</label>
        <input
          type='date'
          name='startDate'
          value={startDate}
          onChange={ e => setStartDate(e.target.value) }
        />
        <label>Finished:</label>
        <input
          type='date'
          name='endDate'
          value={endDate}
          onChange={ e => setEndDate(e.target.value) }
        />
        <button onClick={onSubmit}>
          +
        </button>
      </form>
    </div>
  );
};

