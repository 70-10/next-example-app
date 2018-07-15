import "../styles/app.scss";
import { connect } from "react-redux";
import App from "../components/App";
import { Creator } from "../actions";

const mapStateToProps = state => ({
  uid: state.auth.uid,
  loading: state.auth.loading
});

const mapDispatchToProps = dispatch => ({
  signin: () => dispatch(Creator.Auth.signin()),
  signout: () => dispatch(Creator.Auth.signout()),
  checkAuth: () => dispatch(Creator.Auth.checkAuth())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
