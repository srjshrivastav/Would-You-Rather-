import React, { Fragment } from "react";
import "../App.css";
import { connect } from "react-redux";
import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import NavBar from "./NavBar";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import NewQues from "./NewQues";
import { Route, Redirect } from "react-router-dom";
import QuestionCard from "./QuestionCard";

class App extends React.Component {
  componentDidMount() {
    getInitialData().then(({ users, questions }) => {
      this.props.dispatch(receiveUsers(users));
      this.props.dispatch(receiveQuestions(questions));
    });
  }
  render() {
    const { logIn, users } = this.props;
    console.log("helloo", users);
    return (
      <Fragment>
        <NavBar />
        <Route exact path="/" component={Home} />
        {logIn && (
          <div>
            <Route exact path="/:id/Leaderboard" component={Leaderboard} />
            <Route exact path="/:id/askNewQuestion" component={NewQues} />
            <Route
              exact
              path="/:id/Unanswered"
              render={() => <QuestionCard />}
            />
            <Route
              exact
              path="/:id/Answered"
              render={() => (
                <QuestionCard id={Object.keys(users[logIn].answers)} />
              )}
            />
          </div>
        )}
        {!logIn && <Redirect to="/" />}
      </Fragment>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    logIn: authedUser !== null ? authedUser : null,
    users,
  };
}

export default connect(mapStateToProps)(App);
