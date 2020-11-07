import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({ accessKey: "I_iCIFkNzjqyJW3tUnZ2EJz-NCOhw3Gf6fgRu8i8e8Y"});

// function Results({input}) {
//   const [photos, setPhotos] = useState([]);

//   const getPhotos = async () => {
//     unsplash.search.photos(input)
//     .then(toJson)
//     .then(json => {
//       setPhotos(json.results);
//     })
//   }

//   useEffect(() => {
//     console.log('new rquest');
//   }, [input])

//   return(
//     <div className="result-list">
//     {input}
//     {
//       photos.map((photo) =>
//         <div className="result">
//           <img src={photo.urls.small} alt={photo.alt_description}></img>
//         </div>)
//     }
//     </div>
//   )
  
// }


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
    console.log(this.state.photos)
    return(
      <div className="result-list">
        {(this.state.photos !== []) && this.state.photos.map((photo) =>
            <div className="result">
              <img src={photo.urls.small} alt={photo.alt_description}></img>
              <div className="result-modal">
                <img src={photo.user.profile_image.medium} className="result-modal-profile" alt="Profile"></img>
                <div className="result-modal-text">
                  <h4>{photo.user.first_name} {photo.user.last_name}</h4>
                  <a href={photo.user.links.html}>@{photo.user.username}</a>
                </div>
                <div className="result-modal-photo" style={{ backgroundImage: `url(${photo.urls.full})`}}></div>
              </div>
            </div>
        )}
      </div>
    )
  }
  
}


export default Results;