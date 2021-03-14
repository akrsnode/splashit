import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import ResultItem from './ResultItem';

const unsplash = new Unsplash({ accessKey: "I_iCIFkNzjqyJW3tUnZ2EJz-NCOhw3Gf6fgRu8i8e8Y"});
class Results extends React.Component {
  state= {
    photos: []
  }

  getPhotos(input) {
    unsplash.search.photos(input, 1, 20)
    .then(toJson)
    .then(json => {
      this.setState({ photos: json.results });
    })
  }

  componentDidMount() {
    this.getPhotos(this.props.input);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.photos === this.state.photos) {
      this.getPhotos(this.props.input);
      return true
    }
    return false
  }

  render() {
    return(
      <div className="result-list">
        {(this.state.photos !== []) && this.state.photos.map((photo, index) => <ResultItem id={photo} key={index} />)}
      </div>
    )
  }
}


export default Results;