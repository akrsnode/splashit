function SearchTab(props) {
  
  function handleChange(e) {
    console.log('Suggestion')
  }

  function handleInputSubmit(e) {
    if(e.keyCode === 13) {
      props.onChange(e.target.value);
    }
  }

  return(
    <div className="ui fluid search search-tab">
      <div className="ui icon input search-input">
        <input className="prompt" type="text" onChange={handleChange} onKeyDown={(e) => handleInputSubmit(e)} />
        <i className="search icon" aria-hidden="true"></i> 
      </div>
    </div>

  )
}

export default SearchTab;