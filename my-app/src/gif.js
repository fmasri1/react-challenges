import React, { Component } from "react";

class Gif extends Component {
  render() {
    return(
      <img className="gif" alt="gif"
        src=`${props.url}`>
      </img>
    );
  }

}

export default Gif;
