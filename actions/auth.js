export const Type = {
  Authed: "@next-static/Auth/authed",
  NotAuthed: "@next-static/Auth/not-authed",
  Signin: "@next-static/Auth/signin",
  Signout: "@next-static/Auth/signout"
};

export const Creator = {
  authed(user) {
    return {
      type: Type.Authed,
      user: { uid: user.uid, displayName: user.displayName, email: user.email }
    };
  },
  notAuthed() {
    return { type: Type.NotAuthed };
  },
  signin() {
    return { type: Type.Signin };
  },
  signout() {
    return { type: Type.Signout };
  }
};
