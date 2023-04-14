import { useSelector } from "react-redux";
import Questions from "./Questions";

function Dashboard() {
  const questionIds = useSelector((state) =>
    Object.keys(state.questions).sort(
      (a, b) => state.questions[b].timestamp - state.questions[a].timestamp
    )
  );

  return (
    <div>
      <h3 className="heading center heading-primary">Your Timeline</h3>
      <ul>
        {questionIds.map((id) => (
          <li key={id}>
            <Questions id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
