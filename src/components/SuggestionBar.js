import { useEffect, useState } from 'react';
import SuggestionItem from './SuggestionItem';

function SuggestionBar({ input }) {
  const [suggestions, setSuggest] = useState([])

  useEffect(() => {
    fetch(`https://api.datamuse.com/words?rel_trg=${input}&max=8`).then(res => res.json() ) .then(json => {
      setSuggest(json)
    })
  }, [])


  return(
    <div className="suggestion-bar">
      {suggestions.map((item, index) => <SuggestionItem title={item.word} key={index} />)}
    </div>
  )
}

export default SuggestionBar;