import React from 'react';
import { Input } from 'semantic-ui-react';

function MainSearch() {
  return(
    <div className="main-search-wrapper">
      <div className="text">
        <h1>Splashit</h1>
        <p>Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.</p>
      </div>
      <Input
        placeholder="Search free high-resolution photos"
        fluid={true}
      />
      <p><strong>Last search: </strong>(nothing searched yet)</p>
    </div>
  )
}

export default MainSearch;