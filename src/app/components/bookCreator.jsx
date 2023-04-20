import React, { useState } from 'react';
import Book from './book.jsx';

const bookCreator = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState(new Date()
                                    .toLocaleDateString()
                                    .replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, '$3-0$1-0$2')
                                    .replaceAll(/-0(\d{2})/g, '-$1'));

  return (
    <div id='bookCreator' >
      <h4>Add:</h4>
        {/* needs onSubmit */}
        <Book mode='creator'/>
    </div>
  );
};

export default bookCreator;
