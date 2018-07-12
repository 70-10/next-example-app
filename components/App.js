import { Component } from "react";
import "../styles/app.scss";
import Header from "../containers/Header";
import Signin from "./Signin";

import "../firebase";

class App extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }
  render() {
    const { loading, uid, signin, signout, children } = this.props;

    const Loading = () => (
      <div className="pageloader is-white is-active">
        <span className="title">Sign in check...</span>
      </div>
    );

    if (loading) {
      return <Loading />;
    }

    return !uid ? (
      <Signin signin={signin} />
    ) : (
      <section className="hero is-fullheight is-primary">
        <button className="button" onClick={signout}>
          signout
        </button>
        <div className="hero-head">
          <Header />
        </div>
        <div className="hero-body">{children}</div>
      </section>
    );
  }
}

export default App;
