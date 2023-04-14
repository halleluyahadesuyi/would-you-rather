import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PollResults({ id }) {
  const question = useSelector(state => state.questions[id]);
  const handleVotes = votes => {
    return (votes / 10) * 100;
  };

  return (
    <div className="question-result">
      <div className="question-1">
        <span>Option A</span>
        <progress max="100" value={handleVotes(question.optionOne.votes.length)} />
        <div className="progress">
          <span className="value">{question.optionOne.votes.length}%</span>
          <span className="votes">
            <strong>{question.optionOne.votes.length}</strong> out of <strong>10</strong>
          </span>
        </div>
      </div>
      <div className="question-2">
        <span>Option B</span>
        <progress max="100" value={handleVotes(question.optionTwo.votes.length)} />
        <div className="progress">
          <span className="value">{question.optionTwo.votes.length}%</span>
          <span className="votes">
            <strong>{question.optionTwo.votes.length}</strong> out of <strong>10</strong>
          </span>
        </div>
      </div>
      <Link to="/dashboard" className="go-back center">
        Go back
      </Link>
    </div>
  );
}

export default PollResults;
