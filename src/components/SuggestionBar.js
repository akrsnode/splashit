import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react'

function SuggestionBar({ input, onChange }) {
  const [suggestions, setSuggest] = useState([])

  useEffect(() => {
    fetch(`https://api.datamuse.com/words?rel_trg=${input}&max=8`).then(res => res.json()).then(json => {
      setSuggest(json)
    })
  }, [input])

  function chooseSuggest(e) {
    onChange(e.target.textContent);
  }

  return(
    <>
      <h1>{input}</h1>
      <div className="suggestion-bar">
        {suggestions.map((item, index) => <Button basic={true} key={index} onClick={chooseSuggest} >{item.word}</Button>)}
      </div>
    </>
  )
}

export default SuggestionBar;