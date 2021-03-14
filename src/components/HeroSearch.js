import React from 'react';

class HeroSearch extends React.Component {
  state = { 
    suggest: [],
    openSuggest: false
  }

  handleInputSubmit(e) {
    if(e.keyCode === 13) {
      this.props.onChange(e.target.value);
    }
  }

  closeSuggest() {
    this.setState({ openSuggest: false })
  }

  handleChooseSuggest(e) {
    this.props.onChange(e.target.textContent);
  }

  handleSuggest(e) {
    this.setState({ openSuggest: true })
    let word = e.target.value;
    if(word.length < 3) return this.setState({ suggest: [] });
    fetch(`https://api.datamuse.com/sug?s=${word}&max=5`).then(res => res.json() ).then(json => {
      if(json.length) this.setState({ suggest: ['Brak rezultatów'] })
      this.setState({ suggest: json })
    })
  }
  render() {
    return(
      <div className="main-search-wrapper">
        <div className="text">
          <h1>Splashit</h1>
          <p>Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.</p>
        </div>
        <div className="ui fluid left icon input">
          <input type="text" placeholder="Search free high-resolution photos" onChange={this.handleSuggest.bind(this)} onKeyDown={this.handleInputSubmit.bind(this)} />
          <i aria-hidden="true" className="search icon"></i>
          {this.state.openSuggest && <span aria-hidden="true" className="clear-search" onClick={this.closeSuggest.bind(this)}><i className="times icon"></i></span>}
        </div>
        <div>
          {this.state.suggest.length > 0 && <table className="ui fixed table fluid">
            <tbody className="suggest-table">
              {this.state.suggest.map((item, index) => <tr onClick={this.handleChooseSuggest.bind(this)} key={index}><td>{item.word}</td></tr>)}
            </tbody>
          </table>}
        </div>
        <p><strong>Last search: </strong>(nothing searched yet)</p>
      </div>
    )
  }
}

export default HeroSearch;