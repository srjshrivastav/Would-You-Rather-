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
    return (
      <div>
        <NavBar />
        <Switch>
          <Fragment>
            <Route exact path="/" component={LoginPage} />
            <Route
              exact
              path="/Home/Unanswered"
              render={() => <QuestionCard title={"Unanswered"} />}
            />
            <Route
              exact
              path="/Home/Answered"
              render={() => <QuestionCard title={"Answered"} />}
            />
            <Route exact path="/question/:qid" component={Card} />
            <Route exact path="/askNewQuestion" component={NewQues} />
            <Route exact path="/leaderboard" component={Leaderboard} />
          </Fragment>
          <NotFound history={this.props.history} />
        </Switch>
      </div>
    );
  }
}
// function mapStateToProps({ authedUser }) {
//   return {
//     logIn: authedUser !== null ? authedUser : null,
//   };
// }

export default withRouter(connect()(App));
