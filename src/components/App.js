import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from "react-redux-loading"
import { handleInitialData } from "../actions/shared"

import SignIn from "./SignIn"
import Navbar from "./Navbar"
import Dashboard from "./Dashboard"
import QuestionPage from "./QuestionPage"
import NewQuestion from "./NewQuestion"
import Leaderboard from "./Leaderboard"
import NotFound from "./NotFound"

function App() {
  const dispatch = useDispatch()
  const { authedUser, loading } = useSelector((state) => ({
    authedUser: state.authedUser,
    loading: state.authedUser === null,
  }))

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <Router>
      <>
        <div>
          <LoadingBar />
          {loading ? (
            <Routes>
              <Route path="/" element={<SignIn />} />
            </Routes>
          ) : (
            <>
              <LoadingBar />
              <Navbar id={authedUser} />
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/question/:id" element={<QuestionPage />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/new" element={<NewQuestion />} />
                <Route path="/not-found" element={<NotFound />} />
              </Routes>
            </>
          )}
        </div>
      </>
    </Router>
  )
}

export default App