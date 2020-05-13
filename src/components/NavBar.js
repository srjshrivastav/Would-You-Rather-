import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class NavBar extends React.Component {
  render() {
    const { authedUser } = this.props;
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
              aria-controls="show"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <span className="navbar-toggler-icon"></span>
            <div className="collapse navbar-collapse" id="show">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to={`/${authedUser}/leaderboard`}
                  >
                    Leaderboard
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link text-white"
                    to={`/${authedUser}/unanswered`}
                  >
                    Unanswred
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to={`/${authedUser}/answered`}
                  >
                    Answred
                  </Link>
                </li>
                {authedUser && (
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      to={`/${authedUser}/askNewQuestion`}
                    >
                      Ask New Question?
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(NavBar);
