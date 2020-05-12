import React from "react";
import { NavLink } from "react-router-dom";
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark static-top ">
          <div className="container">
            <NavLink className="navbar-brand mr-auto text-white" to="/">
              WouldYouRather?
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#show"
              aria-controls="show"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <span class="navbar-toggler-icon"></span>
            <div class="collapse navbar-collapse" id="show">
              <ul class="navbar-nav ">
                <li className="nav-item">
                  <NavLink class="nav-link text-white" to="/:id/Dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link text-white" to="/:id/unanswered">
                    Unanswred
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/:id/answered">
                    Answred
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white"
                    to="/:id/leaderboard"
                  >
                    Leaderboard
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;
