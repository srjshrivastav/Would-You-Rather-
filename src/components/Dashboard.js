import React from "react";
import { connect } from "react-redux";
import Questioncard from "./QuestionCard";
class Dashboard extends React.Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="text-center">
          <h3>Dashboard</h3>
        </div>
        <Questioncard />
      </div>
    );
  }
}
function mapStateToProps({}) {}

export default connect(mapStateToProps)(Dashboard);
