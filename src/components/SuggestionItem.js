import { Button } from 'semantic-ui-react'

function SuggestionItem({ title }) {
  return(
    <div>
      <Button basic>{title}</Button>
    </div>
  )
}

export default SuggestionItem;