import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation/Validation';
import Char from './components/Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value})
  } // eof getLength

  deleteCharHandler = (charIndex) => {
    const word = [...this.state.userInput].splice('')
    word.splice(charIndex, 1)
    this.setState({userInput: word.join('')})
  } // eof deleteCharHandler

  render() {
    let charList = this.state.userInput.split('').map((letter, key) => { // split will turn object on array
      return (
        <Char 
          key={key}
          letter={letter} 
          click={() => this.deleteCharHandler(key)} />
      )
    })

    return (
      <div className="App">
        <input 
          type="text" 
          onChange={this.inputChangeHandler} 
          defaultValue={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} word={this.state.userInput}/>
        {charList}
      </div>
    );
  }
}

export default App;
