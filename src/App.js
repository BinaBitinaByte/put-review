import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, BrowserRouter, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      inputText: '',
      artistText: '',
    }
  }
  // state = {
  //   songs: []
  // }
  componentDidMount() {
    axios.get('/api/songs').then(response => {
      this.setState({songs: response.data});
    })
  }

  handleButtonClick = (id) => {
    axios.put('/api/songs/' + id, {song: this.state.inputText, artist: this.state.artistText}).then(response => {
      this.setState({songs: response.data})
    })
  }

  render() {
    let mappedSongs = this.state.songs.map(val => {
      console.log(val);
      return <>
        <h1>{val.song}</h1>
        <h2>{val.artist}</h2>
        <input onChange={(e) => this.setState({inputText: e.target.value})}/>
        <button onClick={() => this.handleButtonClick(val.id)}>Edit</button>
      </>
    })
    return (
      <div className="App">
        {mappedSongs}
      </div>
    );
  }
}

// class Home extends Component {
//   render() {
//     console.log(this.props.match.params.name)
//     // if(this.props.match.params.name !== 'mykenzie') {
//     //   return <Redirect to='/' />
//     // }
//     return(
//       <>
//         <h1>Home Component</h1>
//       </>
//     )
//   }
// }

export default App;
