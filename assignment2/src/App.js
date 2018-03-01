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
    const word = this.state.userInput.split('')
    word.splice(charIndex, 1)
    const updtWord = word.join('')
    this.setState({ userInput: updtWord})
  } // eof deleteCharHandler

  render() {
    const charList = this.state.userInput.split('').map((letter, key) => { // split will turn object on array
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
          value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
