import React, { useEffect, useState } from 'react';
import SearchTab from './SearchTab';
import SuggestionBar from './SuggestionBar';

const stop = 1;

function Main(props) {
  const [query, setQuery] = useState('');

  function handleQuery(value) {
    setQuery(value);
  }

  useEffect(() => {setQuery(props.input)}, [stop])

  return(
    <div className="ui container">
      <SearchTab value={query} onChange={handleQuery} />
      <h1>{ query }</h1>
      <SuggestionBar />
      <h1>GRID</h1>
    </div>
  )
}

export default Main;