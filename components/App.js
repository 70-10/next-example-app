import "../styles/app.scss";
import Header from "../containers/Header";
import Signin from "./Signin";

import "../firebase";

const App = ({ uid, signin, signout, children }) =>
  !uid ? (
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

export default App;
