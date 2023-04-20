import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default props => {
  
  /* need pending/completed boolean for conditional rendering */
  /* each needs onChange */
  /* mode enum: pending, creator, complete */

  switch (props.mode) {
    case 'pending':
      break;
    case 'complete':
      break;
  }

  return (
    <form className='book'> 
      <input
        type='number'
        name='position'
        value={props.position}
        min={1}
        max={10 /* max */}
      />
      <input
        type='text'
        name='title'
        value={props.title}
        placeholder='title'
      />
      <input
        type='text'
        name='author'
        value={props.author}
        placeholder='author'
      />
      <input
        type='text'
        name='publicationYear'
        value={props.year}
        placeholder='year'
      />
      <input
        type='text'
        name='doi'
        value={props.doi}
        placeholder='doi'
      />
      <label>Started:</label>
      <input
        type='date'
        name='startDate'
        value={props.startDate}
      />
      <label>Finished:</label>
      <input
        type='date'
        name='endDate'
        value={props.endDate}
      />
      <button>
        Get Bibliography
      </button>
    </form>
  );
}
