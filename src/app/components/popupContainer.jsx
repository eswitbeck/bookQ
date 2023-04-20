import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from '../reducers/appStateReducer.js';

export default props => {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(toggle());
  };
  return (
    <div id='popupContainer'>
      <h4>Bibliography</h4>
      <form>
        <ul>
          <li className='entry'><span>
            <input type='number' name='position' />
            <label>
              'Year, Author, Title...'
            </label>
          </span></li>
          <li className='entry'><span>
            <input type='number' name='position' />
            <label>
              'Year, Author, Title...'
            </label>
          </span></li>
        </ul>
        <button onClick={close}>
          Accept
        </button>
      </form>
    </div>
  );
};
