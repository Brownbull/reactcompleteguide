import React from "react"
import "./Char.css"

const Char = (props) => {
  return (
    <div className="Char" onClick={props.click}>
      {props.letter}
    </div>
  ) //eof return
} // eof const Char 

export default Char