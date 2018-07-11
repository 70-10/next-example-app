import "../styles/app.scss";

const Signin = ({ signin }) => (
  <section className="hero">
    <div className="hero-body is-fullheight has-text-centered">
      <h1 className="title">not authed</h1>
      <button className="button" onClick={signin}>
        Signin
      </button>
    </div>
  </section>
);

export default Signin;
