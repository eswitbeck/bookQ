import React, { useState } from 'react';

const bookCreator = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState(new Date()
                                    .toLocaleDateString()
                                    .replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, '$3-0$1-0$2')
                                    .replaceAll(/-0(\d{2})/g, '-$1'));

  return (
    <div id='bookCreator'>
      Add:
      <span>
        {/* needs onSubmit */}
        <form onSubmit={ e => e.preventDefault() }>
          <input
            type='text'
            name='title'
            value={title}
            placeholder='title'
            onChange={ e => setTitle(e.target.value) }
          />
          <input
            type='text'
            name='author'
            value={author}
            placeholder='author'
            onChange={ e => setAuthor(e.target.value) }
          />
          <label for='startDate'>Started:</label>
          <input
            type='date'
            name='startDate'
            value={date}
            onChange={ e => setDate(e.target.value) }
          />
          <input type='submit' value='+' />
        </form>
      </span>
    </div>
  );
};

export default bookCreator;
