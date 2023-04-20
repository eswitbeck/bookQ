import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePending, updateCompleted } from '../reducers/bookReducer.js';

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
  const totalPending = useSelector(state => state.books.pending.length);

  const dispatch = useDispatch();
  // variable dispatch

  const onUpdate = e => {
    const update = props.mode === 'pending' ? updatePending : updateCompleted;
    let newValue = e.target.value;
    if (newValue.match(/^\d*$/)) newValue = Number(newValue);
    dispatch(update({
                     index: props.position,
                     field: e.target.name,
                     newValue: newValue,
                    }));
  }

  return (
    <form className='book'> 
      {props.mode === 'pending'
        ?   <input
            type='number'
            name='position'
            value={props.position}
            min={1}
            max={totalPending}
            onChange={onUpdate}
          />
        : null}
      <input
        type='text'
        name='title'
        value={props.title}
        placeholder='title'
        onChange={onUpdate}
      />
      <input
        type='text'
        name='author'
        value={props.author}
        placeholder='author'
        onChange={onUpdate}
      />
      <input
        type='text'
        name='year'
        value={props.year}
        placeholder='year'
        onChange={onUpdate}
      />
      <input
        type='text'
        name='doi'
        value={props.doi}
        placeholder='doi'
        onChange={onUpdate}
      />
      {props.mode === 'pending' ? <label>'Started:'</label> : null}
      <input
        type='date'
        name='startDate'
        value={props.startDate}
        onChange={onUpdate}
      />
      <label>{props.mode === 'pending' ? 'Finished:' : '—'}</label>
      <input
        type='date'
        name='endDate'
        value={props.endDate}
        onChange={onUpdate}
      />
      {props.mode === 'pending'
        ? <button>
            Get Bibliography
          </button>
        : null
      }
    </form>
  );
}
