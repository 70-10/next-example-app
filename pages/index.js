import Head from "next/head";
import { Component } from "react";
import "isomorphic-unfetch";

export default class extends Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    const res = await fetch("http://localhost:3000/users");
    const users = await res.json();
    return { userAgent, users };
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Next.js Example App</h1>
          <p>{this.props.userAgent}</p>
          <p>{JSON.stringify(this.props.users)}</p>
        </div>
      </section>
    );
  }
}
