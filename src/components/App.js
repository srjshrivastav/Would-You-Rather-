import React, { Fragment } from "react";
import "../App.css";
import { connect } from "react-redux";
import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import NavBar from "./NavBar";
import LoginPage from "./LogInPage";
import Leaderboard from "./Leaderboard";
import NewQues from "./NewQues";
import { Route, withRouter, Switch } from "react-router-dom";
import QuestionCard from "./Question";
import Card from "./card";
import NotFound from "./NotFound";
class App extends React.Component {
  componentDidMount() {
    getInitialData().then(({ users, questions }) => {
      this.props.dispatch(receiveUsers(users));
      this.props.dispatch(receiveQuestions(questions));
    });
  }
  render() {
    const { logIn } = this.props;
    return (
      <div>
        <NavBar />
        <Switch>
          {!logIn ? (
            <Route exact path="/" component={LoginPage} />
          ) : (
            <Fragment>
              <Route
                exact
                path="/:user/Home/Unanswered"
                render={() => <QuestionCard title={"Unanswered"} />}
              />
              <Route
                exact
                path="/:user/Home/Answered"
                render={() => <QuestionCard title={"Answered"} />}
              />
              <Route exact path="/question/:qid" component={Card} />
              <Route exact path="/:id/askNewQuestion" component={NewQues} />
              <Route exact path="/:id/Leaderboard" component={Leaderboard} />
            </Fragment>
          )}

          <NotFound history={this.props.history} />
        </Switch>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    logIn: authedUser !== null ? authedUser : null,
  };
}

export default withRouter(connect(mapStateToProps)(App));
