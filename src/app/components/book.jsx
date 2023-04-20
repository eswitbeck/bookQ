import React from 'react';

export default props => {
  
  /* need pending/completed boolean for conditional rendering */
  /* each needs onChange */
  /* mode enum: pending, creator, complete */

  let button;
  let position = (
        <input
          type='number'
          name='position'
          value={props.position}
          min={1}
          max={10 /* max */}
        />
      );
  let doi = (
      <input
        type='text'
        name='doi'
        value={props.doi}
        placeholder='doi'
      />
  );
  let start = (
    <>
      <label for='startDate'>Started:</label>
      <input
        type='date'
        name='startDate'
        value={props.startDate}
      />
    </>
  );
  let end = (
    <>
      <label for='endDate'>Finished:</label>
      <input
        type='date'
        name='endDate'
        value={props.endDate}
      />
    </>
  );

  switch (props.mode) {
    case 'pending':
      button = <button>
                   Get Bibliography
               </button>;
      break;
    case 'creator':
      button = <button>
                   +
               </button>;
      end = undefined;
      break;
    case 'complete':
      position = undefined;
      start = (
        <input
          type='date'
          name='startDate'
          value={props.startDate}
        />
      );
      end = (
        <>
          <label for='endDate'>-</label>
          <input
            type='date'
            name='endDate'
            value={props.endDate}
          />
        </>
      );
      doi = undefined;

      break;
  }

  return (
    <form className='book'> 
      {position}
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
      {doi}
      {start}
      {end}
      {button}
    </form>
  );
}
