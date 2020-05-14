import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import Card from "./card";
import MinCard from "./MinCard";

class Questioncard extends React.Component {
  render() {
    const { ids, title, authedUser } = this.props;
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
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm">
              {ids.map((id) => (
                <MinCard id={id} key={id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, { title }) {
  let ids = Object.keys(users[authedUser].answers);
  if (title === "Unanswered") {
    ids = Object.keys(questions)
      .filter((i) => !ids.includes(i))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
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
