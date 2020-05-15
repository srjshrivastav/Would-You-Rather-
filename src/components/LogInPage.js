import React, { Fragment } from "react";
import { connect } from "react-redux";
import avatar from "../images/avatar.png";
import { Link, withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authUsers";
import NavBar from "../components/NavBar";

class LoginPage extends React.Component {
  handleLogin = (id) => {
    this.props.dispatch(setAuthedUser(id));
  };

  render() {
    const { users, url } = this.props;
    return (
      <Fragment>
        <NavBar />
        <div className="container mt-5">
          <div className="row row-content">
            <div className="col-12 col-sm-6 align-self-center">
              <p>
                <strong>WouldYouRather?</strong> is a project in which you can
                add your polls and others will vote to one of two choices given
                by you.This project is based on react-redux and help you to know
                the perspective of other users for a particular questions.
              </p>
            </div>
            <div className="col-12 col-sm ">
              <div className="card text-center mt-4">
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
                        <Link
                          className="dropdown-item"
                          id={user}
                          key={users[user].id}
                          to={url === "/" ? "/Home/Unanswered" : url}
                          onClick={this.handleLogin.bind(this, users[user].id)}
                        >
                          {user}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ users }, { match }) {
  return {
    users,
    url: match.url,
  };
}

export default withRouter(connect(mapStateToProps)(LoginPage));
