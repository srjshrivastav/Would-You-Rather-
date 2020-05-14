import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MinCard extends React.Component {
  render() {
    const { opOne, opTwo, id } = this.props;
    return (
      <Link to={`/question/${id}`} className="color-text">
        <div
          className="card d-inline-block mt-4"
          style={{ width: "18rem", maxHeight: "10rem", minHeight: "10rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Would You Rather?</h5>
            <div className="container">
              <div className="row justify-content-md-start">
                <ul>
                  <li>{opOne}</li>
                  <li>{opTwo}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
function mapStateToProps({ questions }, { id }) {
  return {
    opOne: questions[id].optionOne.text,
    opTwo: questions[id].optionTwo.text,
    id,
  };
}

export default connect(mapStateToProps)(MinCard);
