import React, { useState, useCallback } from 'react';
import { Categories } from './components/Categories';
import { NewsList } from './components/NewsList';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((c) => setCategory(c), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
