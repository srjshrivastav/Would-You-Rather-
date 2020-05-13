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
            <Link className="navbar-brand mr-auto text-white" to="/">
              WouldYouRather?
            </Link>
            {authedUser && (
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <img
                    src={user.avatarURL}
                    className="LeadAvatar"
                    alt={`Avatar of ${user.name}`}
                  />
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    id="navbarDropdown"
                    to="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hello! {user.name}
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      className="dropdown-item"
                      to={`/${user.id}/Leaderboard`}
                    >
                      Leaderboard
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={`/${user.name}/Unanswered`}
                    >
                      Unanswered
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={`/${user.name}/Answered`}
                    >
                      Answered
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={`/${user.name}/askNewQuestion`}
                    >
                      Ask New Question?
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      className="dropdown-item"
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
