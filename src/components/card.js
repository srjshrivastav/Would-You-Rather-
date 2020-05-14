import React from "react";
import { handleAnswer } from "../actions/shared";
import { connect } from "react-redux";

class Card extends React.Component {
  handleChange = (e, id) => {
    e.preventDefault();
    const ans = e.target.value;
    this.props.dispatch(handleAnswer(id, ans));
  };

  render() {
    const { id, percOne, percTwo, question, title, ans } = this.props;
    return (
      <div className="card mt-1 mb-3" key={id}>
        <div className="card-header">Would You Rather?</div>
        <div className="card-body">
          <form>
            <fieldset id={id}>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id={question.optionOne.text}
                  name="option"
                  value="optionOne"
                  checked={
                    ans ? (ans[id] === "optionOne" ? true : false) : false
                  }
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
                  checked={
                    ans ? (ans[id] === "optionTwo" ? true : false) : false
                  }
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
            </fieldset>
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
    );
  }
}
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

function mapStateToProps({ questions }, { id, title, ans }) {
  const question = questions[id];
  let total = question.optionOne.votes.length + question.optionTwo.votes.length;
  let percOne = financial((question.optionOne.votes.length / total) * 100);
  let percTwo = financial((question.optionTwo.votes.length / total) * 100);

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
