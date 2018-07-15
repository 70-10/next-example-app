import { Type } from "../actions";
const initialState = {
  uid: "",
  displayName: "",
  email: "",
  loading: true
};

const auth = (state = initialState, action) => {
  const { Auth } = Type;
  switch (action.type) {
    case Auth.Authed:
      return {
        uid: action.user.uid,
        displayName: action.user.displayName,
        email: action.user.email,
        loading: false
      };
    case Auth.NotAuthed: {
      return { uid: "", displayName: "", email: "", loading: false };
    }
    default:
      return state;
  }
};

export default auth;
