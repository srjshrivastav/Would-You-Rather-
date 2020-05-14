import React from "react";
import { handleAnswer } from "../actions/shared";
import { connect } from "react-redux";

class Card extends React.Component {
  handleChange = (e, id) => {
    e.preventDefault();
    const ans = e.target.value;
    this.props.dispatch(handleAnswer(id, ans));
  };
  handleCancel = (title) => {
    this.props.history.push(`/${this.props.authedUser}/Home/${title}`);
  };

  render() {
    const { id, percOne, percTwo, question, title, ans } = this.props;
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="card w-50 h-75">
            <div className="card-header ">
              Would You Rather?
              <span className="float-right">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => this.handleCancel(title)}
                >
                  X
                </button>
              </span>
            </div>
            <div className="card-body">
              <form>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id={question.optionOne.text}
                    name="option"
                    value="optionOne"
                    checked={ans ? (ans === "optionOne" ? true : false) : false}
                    disabled={ans ? true : false}
                    onChange={(e) => this.handleChange(e, id)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={question.optionOne.text}
                  >
                    {question.optionOne.text}
                  </label>
                </div>
                <div className="custom-control custom-radio mt-4">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id={question.optionTwo.text}
                    name="option"
                    value="optionTwo"
                    checked={ans ? (ans === "optionTwo" ? true : false) : false}
                    disabled={ans ? true : false}
                    onChange={(e) => this.handleChange(e, id)}
                  />
                  <label
                    className="custom-control-label mt"
                    htmlFor={question.optionTwo.text}
                  >
                    {question.optionTwo.text}
                  </label>
                </div>
              </form>
              {title === "Answered" && (
                <div className="progress">
                  <div
                    className="progress-one"
                    style={{ width: `${percOne}%` }}
                  >{`${percOne}%`}</div>
                  <div
                    className="progress-two"
                    style={{ width: `${percTwo}%` }}
                  >{`${percTwo}%`}</div>
                </div>
              )}
            </div>
            <div className="card-footer text-muted text-right">
              ~{question.author}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

function mapStateToProps({ questions, users, authedUser }, { match }) {
  let percOne, percTwo, ans, total;
  const ansIds = Object.keys(users[authedUser].answers);
  const id = match.params.qid;
  const question = questions[id];
  let title = "Unanswered";
  if (ansIds.includes(id) === true) {
    ans = users[authedUser].answers[id];
    title = "Answered";
    total = question.optionOne.votes.length + question.optionTwo.votes.length;
    percOne = financial((question.optionOne.votes.length / total) * 100);
    percTwo = financial((question.optionTwo.votes.length / total) * 100);
  }

  return {
    id,
    title,
    percOne,
    percTwo,
    question,
    ans,
  };
}

export default connect(mapStateToProps)(Card);
