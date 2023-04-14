import { useSelector } from "react-redux";

function Leaderboard() {
  const users = useSelector((state) => state.users);
  const userIds = Object.keys(users);

  console.log(users);
  return (
    <div className="container mt-10">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Questions Created</th>
            <th>Answered Questions</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {userIds.map((id) => (
            <tr key={id}>
              <td>{users[id].name}</td>
              <td>{users[id].questions.length}</td>
              <td>{Object.keys(users[id].answers).length}</td>
              <td>
                {users[id].questions.length +
                  Object.keys(users[id].answers).length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
