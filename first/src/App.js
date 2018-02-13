import React, { Component } from "react"
import "./App.css"
import Person from "./components/Person/scenes/Person"

class App extends Component {
  state = {
    persons: [
      {name: "Gabriel", age:28},
      {name: "Claudia", age:39},
      {name: "Lia", age:25},
    ],
    otherState: "some other value"
  } // eof state

  switchNameHandler = (newName) => {
    // don't do this this.state.persons.name[0].name = "Gabo"
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Claudia", age: 39 },
        { name: "Lia", age: 26 },
      ]
    }) // eof this.setState
  } // eof switchNameHandler

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Gabriel", age: 28 },
        { name: event.target.value, age: 39 },
        { name: "Lia", age: 26 },
      ]
    }) // eof this.setState
  } // eof nameChangeHandler
  
  render () {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, "Gabo")}>Switch Name</button>
        {/* <button onClick={() => this.switchNameHandler("Gabo1")}>Switch Name</button> */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>My hobbies: studying</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Gabo2")}
          change={this.nameChangeHandler}>Hobbies: Cooking</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}></Person>
      </div>
    ) // eof return
  } // eof render()
} // eof class App extends Component

export default App