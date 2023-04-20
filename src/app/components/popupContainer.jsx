import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../reducers/appStateReducer.js';

export default props => {
  const selection = useSelector(state => state.appState.selection);
  const { title, year, author } = selection;
  const dispatch = useDispatch();
  const close = () => {
    dispatch(toggle());
  };

  const queryString = (title ? `${title}, ` : '') +
                      (author ? author.replace(/(.*), ?(.*)/, '$2 $1, ') : '') +
                      (year ? year : '');

  return (
    <div id='popupContainer'>
      <h4>{queryString}</h4>
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
