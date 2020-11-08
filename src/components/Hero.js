import React, { useEffect, useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import HeroSearch from './HeroSearch';

const unsplash = new Unsplash({ accessKey: "I_iCIFkNzjqyJW3tUnZ2EJz-NCOhw3Gf6fgRu8i8e8Y"});

function Hero(props) {
  const [photo, setPhoto] = useState('');

  function handleInputSubmit(input) {
    props.changeView(false)
    props.onChange(input);
  }

  useEffect(() => {
    unsplash.photos.getRandomPhoto()
    .then(toJson)
    .then(json => {
      return setPhoto(json.urls.full);
    })
  }, []);

  return(
    <div className="hero-image" style={{ backgroundImage: `url(${photo})`}}>
      <HeroSearch onChange={handleInputSubmit} />
    </div>
  )
}

export default Hero;