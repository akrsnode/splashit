import React from 'react';
import Hero from './components/Hero';
import Main from './components/Main';

class App extends React.Component {
  state = {
    heroView: true,
    inputQuery: ''
  }

  handleQuery(val) {
    this.setState({ inputQuery: val });
  }

  handleView(val) {
    this.setState({ heroView: val })
  }

  render() {
    return (
      <div className="App">
        {this.state.heroView && <Hero visible={this.state.heroView} value={this.state.inputQuery} onChange={this.handleQuery.bind(this)} changeView={this.handleView.bind(this)} />}
        {!this.state.heroView && <Main input={this.state.inputQuery} />}
      </div>
    );
  }
}

export default App;
