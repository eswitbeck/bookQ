import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '../reducers/appStateReducer.js';

export default props => {
  const selection = useSelector(state => state.appState.selection);
  const { title, year, author } = selection;
  const dispatch = useDispatch();

  const close = e => {
    e.preventDefault();
    dispatch(setPopup('closed'));
  };
  const clickFocus = e => e.target.focus();

  const queryString = (title ? `${title}, ` : '') +
                      (author ? author.replace(/(.*), ?(.*)/, '$2 $1, ') : '') +
                      (year ? year : '');

  const status = useSelector(state => state.appState.popupStatus);
  const display = () => {
    switch (status) {
      case 'closed':
        return null;
        break;
      case 'loading':
        return <div>Loading from api...</div>;
        break;
      case 'confirmingBook':
//        break;
      case 'selectingSources':
//        break;
      default:
        return null;
      break;
    };
  }

  return (
    <div
      id='popupContainer'
      tabIndex='-1'
      onBlur={close}
      onClick={clickFocus}
    >
      <h4>{queryString}</h4>
      {display()}
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
