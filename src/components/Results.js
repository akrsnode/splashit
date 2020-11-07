import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import ResultItem from './ResultItem';

const unsplash = new Unsplash({ accessKey: "I_iCIFkNzjqyJW3tUnZ2EJz-NCOhw3Gf6fgRu8i8e8Y"});

class Results extends React.Component {
  state= {
    photos: []
  }

  getPhotos() {
    unsplash.search.photos(this.props.input)
    .then(toJson)
    .then(json => {
      this.setState({ photos: json.results });
    })
  }

  shouldComponentUpdate(nextProps) {
    if(this.props.input === nextProps.input) return false
    return true
  }

  render() {
    this.getPhotos()
    return(
      <div className="result-list">
        {(this.state.photos !== []) && this.state.photos.map((photo) => <ResultItem id={photo} />)}
      </div>
    )
  }
  
}


export default Results;