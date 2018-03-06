import React, { Component } from "react"
import "./App.css"
import Person from "./components/Person/scenes/Person"
import Radium from "radium"

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Gabriel", age: 28 },
      { id: "2", name: "Claudia", age: 39 },
      { id: "3", name: "Lia", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false
  } // eof state

  switchNameHandler = (newName) => {
    // don't do this this.state.persons.name[0].name = "Gabo"
    this.setState({
      persons: [
        { id: "1", name: newName, age: 28 },
        { id: "2", name: "Claudia", age: 39 },
        { id: "3", name: "Lia", age: 26 },
      ]
    }) // eof this.setState
  } // eof switchNameHandler

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { // get indexc of person to change on state
      return (
        p.id === id
      )
    })
    const person = {...this.state.persons[personIndex]} // get that person on a local variable as a copy not a reference
    person.name = event.target.value  // change person name on copied var
    const persons = [...this.state.persons] // copy all persons 
    persons[personIndex] = person // chage specific person on copied array of persons

    this.setState({ persons: persons }) // make effective change on state
  } // eof nameChangeHandler

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice() // slice will create a copy instead of use the reference method
    const persons = [...this.state.persons] //this will copy instead of reference persons on state
    persons.splice(personIndex, 1)  // this will delete element
    this.setState({ persons: persons })
  } // eof deletePersonHandler

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  } // eof togglePersonHandler

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    }

    let persons = null

    // check state on each render and evaluate if show persons
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, key) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(key)}
                name={person.name}
                age={person.age}
                change={(event) => this.nameChangeHandler(event, person.id)}>
              </Person>
            ) // eof return
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}>My hobbies: studying</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Gabo2")}
            change={this.nameChangeHandler}>Hobbies: Cooking</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}></Person> */}
        </div>
      )
      style.backgroundColor = "red" // on click button change to this
      style[":hover"] = {
        backgroundColor: "lightred",
        color: "blue"
      }
    } // eof if (this.state.showPersons) 

    const classes = []

    if (this.state.persons.length <= 2){
      classes.push("red")
    }
    if (this.state.persons.length <= 1){
      classes.push("bold") 
    }


    return (
      <div className="App">
        <p className={classes.join(" ")}>It's Working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {/* <button onClick={() => this.switchNameHandler("Gabo1")}>Switch Name</button> */}
        {persons}
      </div>
    ) // eof return
  } // eof render()
} // eof class App extends Component

export default Radium(App)