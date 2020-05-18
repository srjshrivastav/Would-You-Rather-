import React, { Fragment } from "react";
import { handleAddQuestion } from "../actions/shared";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "./LogInPage";
import NavBar from "./NavBar";

class NewQues extends React.Component {
  state = {
    opOne: "",
    opTwo: "",
  };
  handleChange = (e) => {
    this.setState(() => ({
      opOne: document.getElementById("optionOne").value,
      opTwo: document.getElementById("optionTwo").value,
    }));
  };
  handleNewQues = (e) => {
    e.preventDefault();
    const opOne = this.state.opOne;
    const opTwo = this.state.opTwo;
    this.props.dispatch(handleAddQuestion(opOne, opTwo));
    this.props.history.push("/Dashboard");
  };

  render() {
    return !this.props.authedUser ? (
      <LoginPage />
    ) : (
      <Fragment>
        <NavBar />
        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
              <div className="card w-sm-50 m-auto">
                <div className="text-center">
                  <div className="card-header">Create New Question</div>
                </div>
                <div className="card-body">
                  <form onSubmit={(e) => this.handleNewQues(e)}>
                    <div className="form-group">
                      <div className="form-group row">
                        <div className="col-12 offset-sm-3">
                          <h3>Would You Rather?</h3>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 col-sm-3">
                          <label className="col-form-label">First Option</label>
                        </div>
                        <div className="col-12 col-sm-9">
                          <input
                            placeholder="Enter First option"
                            id="optionOne"
                            onChange={(e) => this.handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 col-sm-3">
                          <label className="col-form-label">
                            Second option
                          </label>
                        </div>
                        <div className="col-12 col-sm-9">
                          <input
                            placeholder="Enter  second option"
                            id="optionTwo"
                            onChange={(e) => this.handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 offset-sm-3">
                          <button
                            className="btn btn-outline-dark"
                            disabled={
                              this.state.opTwo === "" || this.state.opOne === ""
                            }
                          >
                            Post Question
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(NewQues));
