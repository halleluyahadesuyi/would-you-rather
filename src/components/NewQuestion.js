import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { handleSaveQuestion } from "../actions/shared"

function NewQuestion() {
  const [optionOne, setOptionOne] = useState("")
  const [optionTwo, setOptionTwo] = useState("")
  const [toDashboard, setToDashboard] = useState(false)

  const dispatch = useDispatch()
  const authedUser = useSelector(state => state.authedUser)

  const handleChangeOptionOne = (e) => {
    setOptionOne(e.target.value)
  }

  const handleChangeOptionTwo = (e) => {
    setOptionTwo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(handleSaveQuestion(optionOne, optionTwo, authedUser))
    setOptionOne("")
    setOptionTwo("")
    setToDashboard(true)
  }

  if (toDashboard) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div>
      <h3 className="heading center heading-primary">
        Compose new question
      </h3>
      <div className="container">
        <h3 className="heading">Would you rather?</h3>
        <form className="new-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="option-a"
              type="text"
              name="optionOne"
              value={optionOne}
              onChange={handleChangeOptionOne}
              placeholder="Set Option A"
              autoComplete="off"
            />
            <input
              className="option-b"
              type="text"
              name="optionTwo"
              value={optionTwo}
              onChange={handleChangeOptionTwo}
              placeholder="Set Option B"
              autoComplete="off"
            />
          </div>
          <button
            className="btn"
            type="submit"
            disabled={optionOne === "" || optionTwo === ""}
          >
            POST
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewQuestion
