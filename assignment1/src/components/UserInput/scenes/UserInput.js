import React from "react"

const UserInput = (props) => {
  return (
    <div className="UserInput">
      <input type="text" onChange={props.change} value={props.username} />
    </div>
  ) //eof return
} // eof const UserInput 

export default UserInput