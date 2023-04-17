import { useSelector } from "react-redux"

const Users = ({ id }) => {
  const user = useSelector((state) => state.users[id])

  const { avatarURL, name, handle } = user
  return (
    <div className="user-info">
      <div className="avatar">
        <img src={avatarURL} alt={name} />
      </div>
      <div className="user-details">
        <span className="name">{name}</span>
        <span className="handle">{handle}</span>
      </div>
    </div>
  )
}

export default Users