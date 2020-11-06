import React from 'react';
import HeroSearch from './components/HeroSearch';
import Main from './components/Main';

class App extends React.Component {
  state = {
    heroSearchVisible: false
  }

  render() {
    return (
      <div className="App">
        {this.state.heroSearchVisible && <HeroSearch />}
        <Main />
      </div>
    );
  }
}

export default App;
