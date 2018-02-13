import React, { Component } from "react"
import "./App.css"
import Person from "./components/Person/scenes/Person"

class App extends Component {
  state = {
    persons: [
      {name: "Gabriel", age:28},
      {name: "Claudia", age:39},
      {name: "Lia", age:25},
    ]
  } // eof state

  switchNameHandler = () => {
    // don't do this this.state.persons.name[0].name = "Gabo"
    
  } // eof switchNameHandler

  render () {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: studying</Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      </div>
    ) // eof return
  } // eof render()
} // eof class App extends Component

export default App