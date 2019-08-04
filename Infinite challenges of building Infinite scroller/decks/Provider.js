import React, { Component } from "react";
import "./style.css";

class Provider extends Component {
  render() {
    return (
      <>
        {this.props.children}
        <a
          className="twitter_link"
          target="_blank"
          rel="noopener nofollow noreferrer"
          href="https://twitter.com/ganapativs"
        >
          @ganapativs
        </a>
      </>
    );
  }
}

export default Provider;
