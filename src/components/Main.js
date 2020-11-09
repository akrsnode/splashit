import React, { useState } from 'react';
import SearchTab from './SearchTab';
import SuggestionBar from './SuggestionBar';
import Results from './Results';

function Main({ input }) {
  const [query, setQuery] = useState(input);

  function handleQuery(value) {
    setQuery(value);
  }

  return(
    <div className="ui container">
      <SearchTab value={query} onChange={handleQuery} class={true}/>
      <SuggestionBar input={query} onChange={handleQuery} />
      <Results input={query} />
    </div>
  )
}

export default Main;