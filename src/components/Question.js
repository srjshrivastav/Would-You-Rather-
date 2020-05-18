import React, { Fragment } from "react";
import { connect } from "react-redux";
import MinCard from "./MinCard";
import LoginPage from "./LogInPage";
import NavBar from "./NavBar";

class Questioncard extends React.Component {
  render() {
    const { UnAnsIds, AnsIds, authedUser } = this.props;
    console.log(UnAnsIds, AnsIds, authedUser);
    return !authedUser ? (
      <LoginPage />
    ) : (
      <Fragment>
        <NavBar />
        <div className="container">
          <ul className="nav nav-tabs ">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#unanswered"
                role="tab"
                data-toggle="tab"
              >
                Unanswered
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#answered"
                role="tab"
                data-toggle="tab"
              >
                Answered
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              id="unanswered"
            >
              <div className="col-12 col-sm">
                {UnAnsIds.map((id) => (
                  <MinCard id={id} key={id} />
                ))}
              </div>
            </div>
            <div className="tab-pane fade show " role="tabpanel" id="answered">
              <div className="col-12 col-sm">
                {AnsIds.map((id) => (
                  <MinCard id={id} key={id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  let AnsIds, UnAnsIds;
  if (authedUser) {
    AnsIds = Object.keys(users[authedUser].answers);
    UnAnsIds = Object.keys(questions)
      .filter((i) => !AnsIds.includes(i))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    return {
      authedUser,
      AnsIds,
      UnAnsIds,
    };
  }
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(Questioncard);
