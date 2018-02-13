import React, { Component } from "react"
import "./App.css"
import Person from "./components/Person/scenes/Person"

class App extends Component {
  render () {
    return (
      <div className="App">
        <Person name="Gabriel" age="28">My hobbies: studying</Person>
      </div>
    ) // eof return
  } // eof render()
} // eof class App extends Component

export default App