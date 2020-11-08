import React, { useEffect, useState } from 'react';
import SearchTab from './SearchTab';
import SuggestionBar from './SuggestionBar';
import Results from './Results';

function Main({ input }) {
  const [query, setQuery] = useState(input);
  const stop = 1;

  function handleQuery(value) {
    setQuery(value);
  }

  useEffect(() => {setQuery(input)}, [])

  return(
    <div className="ui container">
      <SearchTab value={query} onChange={handleQuery} />
      <h1>{ query }</h1>
      <SuggestionBar input={query} />
      <Results input={query} />
    </div>
  )
}

export default Main;