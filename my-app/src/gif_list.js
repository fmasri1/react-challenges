import React, { Component } from "react";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";
import Gif from './gif'

class GifList extends Component {
  render() {
    return(
      <div type="text" className="gif-list">
      </div>
    )
    this.props.gifs.map(gif => {
      return <Gif url={gif.url} key={gif.id} />
    });
  }
}

export default GifList;
