import { useState } from 'react';

function ResultItem({ id }) {
  const [preview, setPreview] = useState(false)

  const openModal = () => {
    if (!preview) setPreview(true);
  }

  const closeModal = () => {
    setPreview(false);
  }

  return(
    <div className="result" onClick={openModal}>
      <img src={id.urls.small} alt={id.alt_description}></img>
      {preview &&
      <div className="result-modal">
        <img src={id.user.profile_image.medium} className="result-modal-profile" alt="Profile" />
        <div className="result-modal-text">
          <h4>{id.user.first_name} {id.user.last_name}</h4>
          <a href={id.user.links.html}>@{id.user.username}</a>
        </div>
        <button className="close-icon" onClick={closeModal} />
        <img className="result-modal-photo" src={id.urls.regular}></img>
        {id.user.location != null && <div className="result-modal-location"><i className="map marker alternate icon"></i>{id.user.location}</div>}
      </div>}
    </div>
  )
}

export default ResultItem;