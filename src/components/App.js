import React from "react";
import logo from "../logo.svg";
import "../App.css";
import avatar from "../images/avatar.png";
import { connect } from "react-redux";
import { getInitialData } from "../utils/api";

class App extends React.Component {
  state = {
    users: {},
  };
  componentDidMount() {
    getInitialData().then(({ users, questions }) => {
      this.setState(() => ({
        users,
      }));
      console.log(users, questions);
    });
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark static-top ">
          <a className="navbar-brand text-white" href="/">
            WouldYouRather?
          </a>
        </nav>
        <div className="container mt-5">
          <div className="row row-content">
            <div className="col-12 col-sm-5 ">
              <div className="card text-center">
                <div className="card-header bg-dark text-white">LOGIN</div>
                <div className="card-body text-center">
                  <div>
                    <img src={avatar} alt="Avatar" className="avatar" />
                  </div>
                  <div className="btn-group dropright mt-3">
                    <button type="button" className="btn btn-secondary">
                      Select User
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropright</span>
                    </button>
                    <div className="dropdown-menu">
                      {Object.keys(users).map((user) => (
                        <a className="dropdown-item" key={user}>
                          {user}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm align-self-center order-sm-first">
              <img
                src={logo}
                className="App-logo img-fluid"
                alt="logo"
                style={{ height: 100 }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
