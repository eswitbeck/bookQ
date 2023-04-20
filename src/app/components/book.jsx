import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePending } from '../reducers/bookReducer.js';

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

  return (
    <form className='book'> 
      {props.mode === 'pending'
        ?   <input
            type='number'
            name='position'
            value={props.position}
            min={1}
            max={totalPending}
            onChange={e => {
              dispatch(
                updatePending({
                               index: props.position,
                               field: 'position',
                               newValue: Number(e.target.value)
                              }))}}
          />
        : null}
      <input
        type='text'
        name='title'
        value={props.title}
        placeholder='title'
        onChange={e => {
          dispatch(
            updatePending({
                           index: props.position,
                           field: 'title',
                           newValue: e.target.value
                          }))}}
      />
      <input
        type='text'
        name='author'
        value={props.author}
        placeholder='author'
        onChange={e => {
          dispatch(
            updatePending({
                           index: props.position,
                           field: 'author',
                           newValue: e.target.value
                          }))}}
      />
      <input
        type='text'
        name='publicationYear'
        value={props.year}
        placeholder='year'
        onChange={e => {
          dispatch(
            updatePending({
                           index: props.position,
                           field: 'year',
                           newValue: Number(e.target.value)
                          }))}}
      />
      <input
        type='text'
        name='doi'
        value={props.doi}
        placeholder='doi'
        onChange={e => {
          dispatch(
            updatePending({
                           index: props.position,
                           field: 'doi',
                           newValue: e.target.value
                          }))}}
      />
      {props.mode === 'pending' ? <label>'Started:'</label> : null}
      <input
        type='date'
        name='startDate'
        value={props.startDate}
        onChange={e => {
          dispatch(
            updatePending({
                           index: props.position,
                           field: 'startDate',
                           newValue: e.target.value
                          }))}}
      />
      <label>{props.mode === 'pending' ? 'Finished:' : '—'}</label>
      <input
        type='date'
        name='endDate'
        value={props.endDate}
        onChange={e => {
          dispatch(
            updatePending({
                           index: props.position,
                           field: 'endDate',
                           newValue: e.target.value
                          }))}}
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
