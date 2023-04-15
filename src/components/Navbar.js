import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { setAuthedUser } from "../actions/authedUser";

function Navbar({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authedUser = useSelector((state) => state.authedUser);
  const user = useSelector((state) => state.users[id]);
  const { avatarURL, name } = user;

  const handleLogout = () => {
    dispatch(setAuthedUser(null));
    navigate("/");
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-list-items">
          <NavLink to="/dashboard">Home</NavLink>
        </li>
        <li className="nav-list-items">
          <NavLink to="/new">New Poll</NavLink>
        </li>
        <li className="nav-list-items">
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </li>
        {authedUser ? (
          <li className="nav-list-items">
            <img src={avatarURL} alt={name} className="login-avatar" />
            <input type="checkbox" id="check" className="logout-check" />
            <label htmlFor="check">
              <FontAwesomeIcon
                icon={faSortDown}
                className="down-arrow-icon"
              ></FontAwesomeIcon>
            </label>
            <div className="dropdown">
              <ul>
                <li>
                  <span className="">{name}</span>
                </li>
                <li>
                  <div className="logout">
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className="sign-out"
                    ></FontAwesomeIcon>
                    <span className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          <li class="nav-list-items">
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
