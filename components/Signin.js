import "../styles/app.scss";

const Signin = ({ signin }) => (
  <section className="hero is-primary is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">not authed</h1>
        <button className="button" onClick={signin}>
          Signin
        </button>
      </div>
    </div>
  </section>
);

export default Signin;
