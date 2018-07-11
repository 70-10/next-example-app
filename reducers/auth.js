import { Type } from "../actions";
const initialState = {
  uid: "",
  displayName: "",
  email: ""
};

const auth = (state = initialState, action) => {
  const { Auth } = Type;
  switch (action.type) {
    case Auth.Authed:
      return {
        uid: action.user.uid,
        displayName: action.user.displayName,
        email: action.user.email
      };
    case Auth.NotAuthed: {
      return { uid: "", displayName: "", email: "" };
    }
    default:
      return state;
  }
};

export default auth;
