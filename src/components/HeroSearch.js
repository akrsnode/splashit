import React, { useEffect, useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({ accessKey: "I_iCIFkNzjqyJW3tUnZ2EJz-NCOhw3Gf6fgRu8i8e8Y"});


function HeroSearch(props) {
  const [photo, setPhoto] = useState('');
  const stop = 1;
  
  function handleChange(e) {
    props.onChange(e.target.value);
  }

  function handleInputSubmit(e) {
    if(e.keyCode === 13) props.changeView(false)
  }

  useEffect(() => {
    unsplash.photos.getRandomPhoto()
    .then(toJson)
    .then(json => {
      return setPhoto(json.urls.full);
    })
  }, [stop]);

  return(
    <div className="hero-image" style={{ backgroundImage: `url(${photo})`}}>
      <div className="main-search-wrapper">
        <div className="text">
          <h1>Splashit</h1>
          <p>Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.</p>
        </div>
        <div className="ui fluid left icon input">
          <input type="text" placeholder="Search free high-resolution photos" onChange={handleChange} onKeyDown={(e) => handleInputSubmit(e)} />
          <i aria-hidden="true" className="search icon"></i>
        </div>
        <p><strong>Last search: </strong>(nothing searched yet)</p>
      </div>
    </div>
  )
}

export default HeroSearch;