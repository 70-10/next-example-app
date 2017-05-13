import React from "react";
import Layout from "../layout";
import PropTypes from "prop-types";

export default class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="container">

          <h1 className="title has-text-centered">{this.props.count}</h1>
          <div className="columns">
            <div className="column has-text-centered">
              <a
                className="button is-info"
                onClick={() => this.props.dispatch("increment", 1)}
              >
                +1
              </a>
            </div>
            <div className="column has-text-centered">
              <a
                className="button is-danger"
                onClick={() => this.props.dispatch("decrement", 1)}
              >
                -1
              </a>
            </div>
            <div className="column has-text-centered">
              <a
                className="button is-primary"
                onClick={() => this.props.dispatch("increment", 100)}
              >
                +100
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Top.propTypes = {
  count: PropTypes.number,
  dispatch: PropTypes.func,
};
