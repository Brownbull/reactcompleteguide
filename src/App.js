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
    otherState: "some other value",
    showPersons: false
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
  
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  } // eof togglePersonHandler

  render () {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null

    // check state on each render and evaluate if show persons
    if (this.state.showPersons) {
      persons = (
        <div >
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
      )
    } // eof if (this.state.showPersons) 

    return (
      <div className="App">
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Switch Name</button>
        {/* <button onClick={() => this.switchNameHandler("Gabo1")}>Switch Name</button> */}
        {persons}
      </div>
    ) // eof return
  } // eof render()
} // eof class App extends Component

export default App