import React, { Component } from 'react';
import Top100Form from './components/Top100Form';
import Top100List from './components/Top100List';

class App extends React.Component {

  state = { Top100s: [] }

  componentDidMount() {

  }

  addSong = (name) => {
    const {top100s} = this.state;
    const id = Math.floor((1 + Math.random()) * 0x1000).toString()
    this.setState({top100s: [...top100s, {id, name}]});
  }

  updateTop100 = (id) => {
    let top100s = this.state.top100s.map(t => {
      if (t.id === id)
        return {...t, complete: !t.complete}
      return t;
    });
    this.setState({top100s});
  }

  deleteTop100 = (id) => {
    const {top100s} = this.state;
    this.setState({top100s: top100s.filter(t => t.id !== id)})
  }


  render() {
    return (
      <div className="container">
        <Top100Form addSong={this.addSong}/>
        <Top100List
          top100s={this.state.top100s}
          updateTop100={this.updateTop100}
          deleteTop100={this.deleteTop100}
        />
      </div>
    );
  }
}

export default App;
