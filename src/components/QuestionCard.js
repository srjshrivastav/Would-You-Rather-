import React from "react";
import { connect } from "react-redux";

class Questioncard extends React.Component {
  handleChange = (e) => {
    e.preventDefault();
    //ToDos save Ans
  };

  render() {
    const { questions, id, ans, title } = this.props;
    return (
      <div className="container mt-3">
        <h3 className="text-center">{title}</h3>
        {id.map((i) => (
          <div className="card mt-1 mb-3" key={i}>
            <div className="card-header">Would You Rather?</div>
            <div className="card-body">
              <form>
                <fieldset id={i}>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id={questions[i].optionOne.text}
                      name="option"
                      value={questions[i].optionOne.text}
                      checked={ans ? ans[i] === "optionOne" : false}
                      disabled={ans ? true : false}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={questions[i].optionOne.text}
                    >
                      {questions[i].optionOne.text}
                    </label>
                  </div>
                  <div className="custom-control custom-radio mt-4">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id={questions[i].optionTwo.text}
                      name="option"
                      value={questions[i].optionOne.text}
                      checked={ans ? ans[i] === "optionTwo" : false}
                      disabled={ans ? true : false}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <label
                      className="custom-control-label mt"
                      htmlFor={questions[i].optionTwo.text}
                    >
                      {questions[i].optionTwo.text}
                    </label>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
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
      questions,
      id,
      title,
    };
  }

  return {
    questions,
    id,
    ans: users[authedUser].answers,
    title,
  };
}
export default connect(mapStateToProps)(Questioncard);
