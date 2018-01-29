import Head from "next/head";
import { Component } from "react";

export default class extends Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Next.js Example App</h1>
          <p>{this.props.userAgent}</p>
        </div>
      </section>
    );
  }
}
