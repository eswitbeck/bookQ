import React, { useState } from 'react';
import bookToComponent from '../utils/bookToComponent.jsx';


/* takes in { year, bookList } */
export default props => {
  const [isDropped, setDropped] = useState(false);
  const [dropButton, setButton] = useState('v');
  const toggle = () => setDropped(!isDropped);

  return (
    <div className='year'>
      <span>
        <h5>{props.year}</h5>
        <button onClick={toggle}>{isDropped ? 'v' : '>' }</button>
      </span>
      <div
        className='dropdown'
        style={{display: isDropped ? 'block' : 'none'}}
      >
        {props.booklist.map(
          b => bookToComponent(b, 'complete'))}
      </div>
    </div>
  );
}
