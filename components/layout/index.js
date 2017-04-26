import React from "react";
import Head from "next/head";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>{this.props.title}</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.min.css"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        {/* <header className="section"> */}
        <nav className="nav has-shadow">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item is-tab is-hidden-mobile is-active">Home</a>
              <a className="nav-item is-tab is-hidden-mobile">Home</a>
              <a className="nav-item is-tab is-hidden-mobile">Home</a>
            </div>
            <div className="nav-right nav-menu">
              <a href="" className="nav-item is-tab">Profile</a>
              <a href="" className="nav-item is-tab">Logout</a>
            </div>
          </div>
        </nav>
        {/* </header> */}
        <section className="section">
          {this.props.children}
        </section>
      </div>
    );
  }
}
