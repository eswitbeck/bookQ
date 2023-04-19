import React from 'react';

export default props => {
  
  /* need pending/completed boolean for conditional rendering */
  /* each needs onChange */
  return (
    <div className='book'>
      <form> 
        <input
          type='number'
          name='position'
          value={props.position}
          min={1}
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
        <label for='startDate'>Started:</label>
        <input
          type='date'
          name='startDate'
          value={props.startDate}
        />
        <label for='endDate'>Finished:</label>
        <input
          type='date'
          name='endDate'
          value={props.endDate}
        />
      </form>
      <button>
        Get Bibliography
      </button>
    </div>
  );
}
