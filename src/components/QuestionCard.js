import React from "react";
import { connect } from "react-redux";

class Questioncard extends React.Component {
  render() {
    const { choiceOne, choiceTwo } = this.props;
    return (
      <div className="card">
        <div className="card-header">Would You Rather?</div>
        <div className="card-body">
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id={choiceOne.text}
              name="ng"
              value="1"
            />
            <label className="custom-control-label" htmlFor={choiceOne.text}>
              {choiceOne.text}
            </label>
          </div>
          <div className="custom-control custom-radio mt-4">
            <input
              type="radio"
              className="custom-control-input"
              id={choiceTwo.text}
              name="ng"
              value="2"
            />
            <label className="custom-control-label mt" htmlFor={choiceTwo.text}>
              {choiceTwo.text}
            </label>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ questions }, { id }) {
  return {
    choiceOne: questions[id].optionOne,
    choiceTwo: questions[id].optionTwo,
  };
}
export default connect(mapStateToProps)(Questioncard);
