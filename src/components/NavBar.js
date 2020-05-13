import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
class NavBar extends React.Component {
  render() {
    const { authedUser, user } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark static-top ">
          <div className="container">
            <Link className="navbar-brand mr-auto text-white" to="/">
              WouldYouRather?
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#show"
            >
              <span className="navbar-toggler-icon my-toggler"></span>
            </button>
            <div className="collapse navbar-collapse" id="show">
              {authedUser && (
                <ul className="navbar-nav m-1 ">
                  <li className="nav-item order-sm-last">
                    <span className="text-white">Hello! {user.name}</span>
                    <img
                      src={user.avatarURL}
                      className="LeadAvatar"
                      alt={`Avatar of ${user.name}`}
                    />
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-white"
                      to={`/${authedUser}/leaderboard`}
                      activeClassName="active"
                    >
                      Leaderboard
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link text-white"
                      to={`/${authedUser}/unanswered`}
                      activeClassName="active"
                    >
                      Unanswred
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-white"
                      to={`/${authedUser}/answered`}
                      activeClassName="active"
                    >
                      Answred
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-white"
                      to={`/${authedUser}/askNewQuestion`}
                      activeClassName="active"
                    >
                      Ask New Question?
                    </NavLink>
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
