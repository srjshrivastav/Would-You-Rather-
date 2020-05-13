import React from "react";
import { connect } from "react-redux";
import Card from "./card";

class Questioncard extends React.Component {
  render() {
    const { id, ans, title } = this.props;
    return (
      <div className="container mt-3">
        <h3 className="text-center">{title}</h3>
        {id.map((i) => (
          <Card id={i} title={title} ans={ans} key={i} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, { title }) {
  let id = Object.keys(users[authedUser].answers);
  if (title === "Unanswered") {
    id = Object.keys(questions).filter((i) => !id.includes(i));
    return {
      id,
      title,
    };
  } else {
    return {
      id,
      ans: users[authedUser].answers,
      title,
    };
  }
}
export default connect(mapStateToProps)(Questioncard);
