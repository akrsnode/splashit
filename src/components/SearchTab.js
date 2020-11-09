import React from 'react';

class HeroSearch extends React.Component {
  state = { 
    suggest: [],
    openSuggest: false
  }

  handleInputSubmit(e) {
    if(e.keyCode === 13) {
      this.props.onChange(e.target.value);
      this.closeSuggest();
    }
  }

  closeSuggest() {
    this.setState({ openSuggest: false })
  }

  handleChooseSuggest(e) {
    this.props.onChange(e.target.textContent);
    this.closeSuggest();
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
      <div>
        <div className={this.props.class ? "ui search icon input fluid bar" : "ui fluid left icon input"}>
          <input id="input" className="prompt" type="text" placeholder="Search free high-resolution photos" onChange={this.handleSuggest.bind(this)} onKeyDown={this.handleInputSubmit.bind(this)} />
          <i aria-hidden="true" className="search icon"></i>
          {this.state.openSuggest && <span aria-hidden="true" className="clear-search" onClick={this.closeSuggest.bind(this)}><i className="times icon"></i></span>}
        </div>
        <div>
          {this.state.openSuggest && <table className="ui fixed table fluid">
            <tbody className="suggest-table">
              {this.state.suggest.map((item, index) => <tr onClick={this.handleChooseSuggest.bind(this)} key={index}><td>{item.word}</td></tr>)}
            </tbody>
          </table>}
        </div>
      </div>
    )
  }
}

export default HeroSearch;