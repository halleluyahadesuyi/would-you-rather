import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helper";
import PollResults from "./PollResults";
import { handleSaveAnswer } from "../actions/shared";
import { saveAnswerToUser } from "../actions/users";

function QuestionPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);
  const question = questions[id] ? formatQuestion(questions[id], users[questions[id].author]) : null;

  const [option, setOption] = useState("");
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      handleSaveAnswer({
        authedUser,
        qid: question.id,
        answer: option,
      })
    );

    dispatch(
      saveAnswerToUser({
        authedUser,
        qid: question.id,
        answer: option,
      })
    );

    setAnswerSubmitted(true);
  };

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  if (!question) {
    return (
      <div className="container mt-10">
        <p className="not-exist">This question doesn't exist.</p>
      </div>
    );
  }

  const { name, timestamp, avatar, optionOne, optionTwo } = question;

  return (
    <div className="container mt-10">
      <div className="question-wrapper">
        <div className="user-info">
          <div className="avatar">
            <img src={avatar} alt={name} />
          </div>
          <div className="user-details">
            <span className="name">{name}</span>
            <span className="date">{formatDate(timestamp)}</span>
          </div>
        </div>
        <div className="question">
          <h3 className="heading">Would you rather?</h3>
          <form className="question-answer-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="radio"
                id="answer-a"
                name="answer"
                value="optionOne"
                onChange={handleChange}
              />
              <label htmlFor="answer-a" className="answer-a">
                {optionOne.text}
              </label>

              <input
                type="radio"
                id="answer-b"
                name="answer"
                value="optionTwo"
                onChange={handleChange}
              />
              <label htmlFor="answer-b" className="answer-b">
                {optionTwo.text}
              </label>
            </div>
            {option && (
              <button
                type="submit"
                className="btn"
                disabled={answerSubmitted}
              >
                Submit
              </button>
            )}
          </form>
        </div>
        {answerSubmitted && <PollResults id={id}></PollResults>}
      </div>
    </div>
  );
}

export default QuestionPage;
