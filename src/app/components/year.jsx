import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import bookToComponent from '../utils/bookToComponent.jsx';


/* takes in { year, bookList } */
export default props => {
  const [isDropped, setDropped] = useState(true);
  const [dropButton, setButton] = useState('v');
  const toggle = () => setDropped(!isDropped);

  return (
    <div className='year'>
      <span>
        <h5>{props.year}</h5>
        <button onClick={toggle}>
          {isDropped ? 'v' : '>' }
        </button>
      </span>
    {
      isDropped
      ? <div className='dropdown'>
        {props.booklist.map(
          b => bookToComponent(b, 'completed'))}
      </div>
      : null
    }
    </div>
  );
}
