import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import NavBar from "./NavBar";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import NewQues from "./NewQues";
import { Route } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    getInitialData().then(({ users, questions }) => {
      this.props.dispatch(receiveUsers(users));
      this.props.dispatch(receiveQuestions(questions));
    });
  }
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/:id/Leaderboard" component={Leaderboard} />
        <Route exact path="/:id/askNewQuestion" component={NewQues} />
      </div>
    );
  }
}

export default connect()(App);
