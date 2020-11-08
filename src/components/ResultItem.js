import { useState } from 'react';

function ResultItem({ id }) {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(!open);
    console.log(id)
  }

  return(
    <div className="result" onClick={openModal}>
      <img src={id.urls.small} alt={id.alt_description}></img>
      {open && <div className="result-modal">
        <img src={id.user.profile_image.medium} className="result-modal-profile" alt="Profile"></img>
        <div className="result-modal-text">
          <h4>{id.user.first_name} {id.user.last_name}</h4>
          <a href={id.user.links.html}>@{id.user.username}</a>
        </div>
        <div className="result-modal-photo" style={{ backgroundImage: `url(${id.urls.regular})`}}></div>
        <div className="result-modal-location"><i className="map marker alternate icon"></i>{id.user.location}</div>
      </div>}
    </div>

  )
}

export default ResultItem;