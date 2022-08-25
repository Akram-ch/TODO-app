import React from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className="app-body">
      <h1>anything important? add it to the list !</h1>
      <form className="form-element">
        <input
          className="text-input"
          placeholder="add a new task..."
          name="text-input"
          ></input>
        <button className="input-button">Add task</button>
      </form>
    </div>
  )
}

export default App;
