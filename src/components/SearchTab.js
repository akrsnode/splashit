import { Search } from 'semantic-ui-react';
import { useState } from 'react';

function SearchTab(props) {
  function handleChange(e) {
    props.onChange(e.target.value);
  }

  return(
    <div className="search-tab">
      <Search
        className="search-input"
        fluid={true}
        onSearchChange={handleChange}
      />
    </div>
  )
}

export default SearchTab;