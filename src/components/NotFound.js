import React from "react";

const NotFound = ({ history }) => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-4 align-items-center">
        <div className="card align-content-center">
          <h3 className="card-title">Page Not Found 404</h3>
          <div className="card-body">
            <button
              className="btn btn-outline-dark"
              onClick={() => history.push("/")}
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
