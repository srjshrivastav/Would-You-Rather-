import React from "react";
import { connect } from "react-redux";

function Leaderboard(props) {
  const { users } = props;
  return (
    <div className="container mt-sm-4">
      <h3 className="text-center">Leaderboard</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Rank</th>
              <th>Profile</th>
              <th>User</th>
              <th>Questions Asked</th>
              <th>Questions Answered</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={user.avatarURL}
                    className="LeadAvatar {
                    "
                    alt={`Avatar of ${user.name}`}
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.questions.length}</td>
                <td>{Object.keys(user.answers).length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  const userScore = (user) =>
    Object.keys(user.answers).length + user.questions.length;
  return {
    users: Object.values(users).sort((a, b) => userScore(b) - userScore(a)),
  };
};

export default connect(mapStateToProps)(Leaderboard);
