import './App.css';
import './search_bar';
import React, { Component } from "react";
import SearchBar from './search_bar';
import Gif from './gif'
import GifList from './gif_list';
import Giphy from "giphy-api";
// import { render } from 'node-sass';
// import giphyApi from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gifs: []}
    this.search('homer')
  }

  search = (query) => {
    Giphy('PTCyUdOiBL0WDrqrnPjDLCAN2oghYuxx').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="right-scene">
          <GifList />
        </div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
