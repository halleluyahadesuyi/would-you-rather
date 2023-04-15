import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PollResults from "./PollResults";
import Questions from "./Questions";

function Dashboard() {
  const [unanswered, setUnanswered] = useState(true)
  const questionIds = useSelector((state) =>
    Object.keys(state.questions).sort(
      (a, b) => state.questions[b].timestamp - state.questions[a].timestamp
    )
  );

  // function handleUnanswered() {
  //   return unanswered ? 
  // }

  // function handleUnanswered() {
  //   setUnanswered(true)
  // }

  return (
    <div>
      <h3 className="heading center heading-primary">Your Timeline</h3>
      <div className="unanswered-answered-btn">
        <button onClick={() => setUnanswered(true)}>Unanswered Questions</button>
        <button onClick={() => setUnanswered(false)}>Answered Questions</button>
      </div>
      {unanswered ?
        (<ul>
          {questionIds.map((id) => (
            <li key={id}>
              <Questions id={id} />
            </li>
          ))}
        </ul>
        ) :
        (
          <ul>
            {questionIds.map((id) => (
              <li key={id}>
                <Questions id={id}
                
               {...<Link to={`/question/${id}`} className="submit-poll">
            Show Poll Answers
          </Link>}
                />
                <PollResults id={id}/>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
}

export default Dashboard;
