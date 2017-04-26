import React from "react";
import MicroContainer from "react-micro-container";
import Top from "../components/top";

export default class TopContainer extends MicroContainer {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.subscribe({
      increment: this.handleIncrement,
      decrement: this.handleDecrement,
    });
  }

  handleIncrement(count) {
    this.setState({ count: this.state.count + count });
  }

  handleDecrement(count) {
    this.setState({ count: this.state.count - count });
  }

  render() {
    return <Top dispatch={this.dispatch} {...this.state} />;
  }
}
