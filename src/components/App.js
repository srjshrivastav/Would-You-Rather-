import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { getInitialData } from "../utils/api";
import NavBar from "./NavBar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import NewQues from "./NewQues";

class App extends React.Component {
  state = {
    users: {},
  };
  componentDidMount() {
    getInitialData().then(({ users, questions }) => {
      this.setState(() => ({
        users,
      }));
      console.log(this.props);
    });
  }

  handleLogin = () => {};
  render() {
    return (
      <div>
        <NavBar />
        {/* <Home users={this.state.users} /> */}
        <NewQues />
      </div>
    );
  }
}

export default connect()(App);
