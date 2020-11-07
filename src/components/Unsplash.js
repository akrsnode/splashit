import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({ accessKey: "I_iCIFkNzjqyJW3tUnZ2EJz-NCOhw3Gf6fgRu8i8e8Y"});

class Unsplashit extends React.Component {
  state = { photo: '' }
  componentDidMount() {
    unsplash.photos.getRandomPhoto()
    .then(toJson)
    .then(json => {
       this.photo.setState(json.urls.full);
    })  
  }
}

export default Unsplashit;