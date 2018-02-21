import React from "react"

const Validation = (props) => {
  let response = ""
  if (props.inputLength == 0) {
    response = "Please write a Word"
  }
  else if (props.inputLength > 5) {
    response = "Text Long Enough"
  }
  else {
    response = "Text Too Short"
  }

  return (
    <div className="Validation">
      {response}
    </div>
  ) //eof return
} // eof const Validation 

export default Validation