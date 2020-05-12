import React from "react";

class NewQues extends React.Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="card w-50 m-auto">
              <div className="text-center">
                <div className="card-header">Create New Question</div>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <div className="form-group row">
                      <div className="col-12 col-sm-3">
                        <label className="col-form-label">Question</label>
                      </div>
                      <div className="col-12 col-sm-9">
                        <input placeholder="Enter Your Question" name="ques" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-12 col-sm-3">
                        <label className="col-form-label">First Option</label>
                      </div>
                      <div className="col-12 col-sm-9">
                        <input placeholder="Enter First option" name="ques" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-12 col-sm-3">
                        <label className="col-form-label">Second option</label>
                      </div>
                      <div className="col-12 col-sm-9">
                        <input placeholder="Enter  second option" name="ques" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-12 offset-sm-3">
                        <button className="btn btn-outline-dark">
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
    );
  }
}

export default NewQues;
