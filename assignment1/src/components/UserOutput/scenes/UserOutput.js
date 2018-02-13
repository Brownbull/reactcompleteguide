import React from "react"

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p >{props.username}</p>
      <p>{props.initialUserName}</p>
    </div>
  ) //eof return
} // eof const UserOutput 

export default UserOutput