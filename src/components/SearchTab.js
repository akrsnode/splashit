import { Search } from 'semantic-ui-react';

function SearchTab() {
  return(
    <div className="search-tab">
      <Search
        className="search-input"
        fluid={true}
      />
    </div>
  )
}

export default SearchTab;