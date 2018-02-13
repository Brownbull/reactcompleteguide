import React, { Component } from "react"
import "./App.css"
import UserInput from "./components/UserInput/scenes/UserInput"
import UserOutput from "./components/UserOutput/scenes/UserOutput"

class App extends Component {
  state = {
    username: "zxc"
  }

  nameChangeHandler = (event) => {
    this.setState({ username: event.target.value})
  } 



  render() {
    let initialName = this.state.username.value
    return (
      <div className="App">
        <UserInput change={this.nameChangeHandler}/>
        <UserOutput 
          username={this.state.username}
          initialUserName={initialName} />
      </div>
    ) // eof return
  } // eof render() 
} //eof class App extends Component

export default App
