import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { formatQuestion } from "../utils/helper"

const Questions = ({ id }) => {
  const question = useSelector(({ users, questions }) => {
    const q = questions[id]
    return q ? formatQuestion(q, users[q.author]) : null
  })

  if (question === null) {
    return (
      <div className="container">
        <p className="not-exist">This question doesn't exist.</p>
      </div>
    )
  }

  const { name, avatar, optionOne, optionTwo } = question

  return (
    <div className="container">
      <div className="question-wrapper">
        <div className="user-info">
          <div className="avatar">
            <img src={avatar} alt={name} />
          </div>
          <div className="user-details">
            <span className="name">{name}</span>
          </div>
        </div>
        <div className="question">
          <h3 className="heading">Would you rather?</h3>
          <div className="options">
            <h3 className="option-1 option">{optionOne.text}</h3>
            <h3 className="option-2 option">{optionTwo.text}</h3>
          </div>
          <Link to={`/question/${id}`} className="submit-poll">
            Answer Poll Question
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Questions
