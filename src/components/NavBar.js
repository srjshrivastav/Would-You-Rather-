import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { unsetAuthedUser } from "../actions/authUsers";
class NavBar extends React.Component {
  logout = () => {
    this.props.dispatch(unsetAuthedUser());
  };

  render() {
    const { authedUser, user } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark static-top ">
          <div className="container">
            <Link
              className="navbar-brand mr-auto text-white"
              to={authedUser ? `/${user.id}/Leaderboard` : "/"}
            >
              WouldYouRather?
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              {authedUser && (
                <ul className="navbar-nav">
                  <li className="nav-item dropdown hover">
                    <Link
                      className="nav-link dropdown-toggle text-white"
                      id="navbarDropdown"
                      to="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>
                        <img
                          src={user.avatarURL}
                          className="navavatar"
                          alt={`Avatar of ${user.name}`}
                        />
                      </span>
                      Hello! {user.name}
                    </Link>
                    <div
                      className="dropdown-menu bg-dark"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link
                        className="dropdown-item  text-white hover-color"
                        to={`/${user.id}/Leaderboard`}
                      >
                        Leaderboard
                      </Link>
                      <Link
                        className="dropdown-item text-white hover-color"
                        to={`/${user.name}/askNewQuestion`}
                      >
                        Ask New Question?
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link
                        className="dropdown-item text-white hover-color"
                        to="/"
                        onClick={() => this.logout()}
                      >
                        Logout
                      </Link>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    authedUser,
    user,
  };
}
export default connect(mapStateToProps)(NavBar);
