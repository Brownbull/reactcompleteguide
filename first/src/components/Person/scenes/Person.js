import React from "react"
import "./Person.css"
import Radium from "radium"

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} defaultValue={props.name} />
    </div>
  ) //eof return
} // eof const Person 

export default Radium(Person)