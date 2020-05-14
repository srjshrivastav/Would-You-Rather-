import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./card";

class Questioncard extends React.Component {
  render() {
    const { ids, ans, title, authedUser } = this.props;
    return (
      <div className="container">
        <ul className="nav nav-tabs bg-dark hover-color">
          <li className="nav-item">
            <Link
              className={
                title === "Unanswered"
                  ? "nav-link active"
                  : "nav-link text-white "
              }
              to={`/${authedUser}/Home/Unanswered`}
            >
              Unanswered
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                title === "Answered"
                  ? "nav-link active "
                  : "nav-link  text-white"
              }
              to={`/${authedUser}/Home/Answered`}
            >
              Answered
            </Link>
          </li>
        </ul>
        {ids.map((id) => (
          <Card id={id} title={title} ans={ans} key={id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, { title }) {
  let ids = Object.keys(users[authedUser].answers);
  if (title === "Unanswered") {
    ids = Object.keys(questions)
      .filter((i) => !ids.includes(i))
      .sort((a, b) => b.timestamp - a.timestamp);
    return {
      ids,
      title,
      authedUser,
    };
  } else {
    return {
      ids,
      ans: users[authedUser].answers,
      title,
      authedUser,
    };
  }
}
export default connect(mapStateToProps)(Questioncard);
