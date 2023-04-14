import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import Users from "./Users";

const SignIn = () => {
  const dispatch = useDispatch();
  const userIds = useSelector((state) => Object.keys(state.users));
  const [toDashboard, setToDashboard] = useState(false);

  const handleAuthedUser = (authedUserId) => {
    new Promise((res, rej) => {
      setTimeout(() => res(), 500);
    }).then(() => {
      dispatch(setAuthedUser(authedUserId));
      setToDashboard(true);
    });
  };

  if (toDashboard) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <ul className="register-user">
      <h3>Sign In</h3>
      {userIds.map((id) => (
        <li
          key={id}
          className="register-user-list-item"
          style={{ cursor: "pointer" }}
          onClick={() => handleAuthedUser(id)}
        >
          <Users id={id} />
        </li>
      ))}
    </ul>
  );
};

export default SignIn;
