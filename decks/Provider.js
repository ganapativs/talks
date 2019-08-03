import { Component } from "react";
import "./style.css";

class Provider extends Component {
  render() {
    return this.props.children;
  }
}

export default Provider;
