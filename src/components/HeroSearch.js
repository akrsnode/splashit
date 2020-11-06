import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
//import GetRandomPhoto from './Unsplash';

function HeroSearch() {
  const [query, setQuery] = useState('');
  return(
    <div className="hero-image" styles={{ backgroundImage: `url()`}}>
      <div className="main-search-wrapper">
        <div className="text">
          <h1>Splashit</h1>
          <p>Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.</p>
        </div>
        <Input
          placeholder="Search free high-resolution photos"
          fluid={true}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
        <p><strong>Last search: </strong>(nothing searched yet){query}</p>
      </div>
    </div>
  )
}

export default HeroSearch;