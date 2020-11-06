import React from 'react';
import SearchTab from './SearchTab';
import SuggestionBar from './SuggestionBar';


function Main() {
  return(
    <div className="ui container">
      <SearchTab />
      <SuggestionBar />
      <h1>GRID</h1>
    </div>
  )
}

export default Main;