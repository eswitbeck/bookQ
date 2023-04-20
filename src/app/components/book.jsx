import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updatePending,
  updateCompleted,
  removeBook
} from '../reducers/bookReducer.js';
import { toggle } from '../reducers/appStateReducer.js';

export default props => {
  const totalPending = useSelector(state => state.books.pending.length);

  const dispatch = useDispatch();

  const onUpdate = e => {
    e.preventDefault();
    const update = props.mode === 'pending' ? updatePending : updateCompleted;
    let newValue = e.target.value;
    if (newValue && newValue.match(/^\d*$/)) newValue = Number(newValue);
    const field = e.target.name;
    if (typeof newValue === 'number' || field !== 'position') {
      dispatch(update({
                       index: props.position,
                       field: field,
                       newValue: newValue,
                      }));
    }
  };

  const onRemove = e => {
    e.preventDefault();
      dispatch(removeBook({
                           position: props.position,
                           mode: props.mode,
                          }));
  };

  const open = () => {
    dispatch(toggle());
  };

  return (
    <div className='book'> 
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
      {props.mode === 'pending' ? <label>Started:</label> : null}
      <input
        type='date'
        name='startDate'
        value={props.startDate}
        onChange={onUpdate}
      />
      <label>
        {props.mode === 'pending' ? 'Finished:' : '—'}
      </label>
      <input
        type='date'
        name='endDate'
        value={props.mode === 'pending' ? undefined : props.endDate}
        onChange={onUpdate}
      />
      <button onClick={open}>
        Get bibliography
      </button>
      <button onClick={onRemove}>
        x
      </button>
    </div>
  );
}
