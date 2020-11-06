import React from 'react';
import HeroSearch from './components/HeroSearch';
import Main from './components/Main';

class App extends React.Component {
  state = {
    heroView: true,
    inputQuery: ''
  }

  componentDidUpdate() {
    this.setState({inputQuery: HeroSearch.query});
    console.log('hejka')
  }

  render() {
    console.log(HeroSearch.state.query);
    return (
      <div className="App">
        {this.state.heroView && <HeroSearch 
          //onChange={this.setState({heroSearchVisible: false})}
        />}
        {this.state.heroView && <Main />}
        <h1>{this.state.inputQuery}</h1>
      </div>
    );
  }
}

export default App;
