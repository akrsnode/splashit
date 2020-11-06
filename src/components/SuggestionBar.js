import SuggestionItem from './SuggestionItem';

const suggestions = ['lato', 'montserret', 'poppins', 'playfair', 'arial', 'helvetica'];

function SuggestionBar() {
  return(
    <div className="suggestion-bar">
      {suggestions.map(item => <SuggestionItem title={item} />)}
    </div>
  )
}

export default SuggestionBar;