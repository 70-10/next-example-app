import React, { Component } from "react";
import axios from "axios";

export default class Index extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { users: [] };
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:3001/users");
    this.setState({ users: res.data });
  }

  render() {
    const userList = this.state.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
    return (
      <div>
        <h1>Hello Next.js</h1>
        <ul>{userList}</ul>
      </div>
    );
  }
}
