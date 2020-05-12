import React from "react";

class Questioncard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">1. This is a trial Qustion</div>
        <div className="card-body">
          <div class="custom-control custom-radio">
            <input
              type="radio"
              class="custom-control-input"
              id="1"
              name="ng"
              value="1"
            />
            <label class="custom-control-label" for="1">
              option1
            </label>
          </div>
          <div class="custom-control custom-radio mt-4">
            <input
              type="radio"
              class="custom-control-input"
              id="2"
              name="ng"
              value="2"
            />
            <label class="custom-control-label mt" for="2">
              option 2
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Questioncard;
