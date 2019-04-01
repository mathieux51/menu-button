import React, { Component } from "react"
import "./App.css"
import Menubutton from "./Menubutton"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menubutton />
        </header>
      </div>
    )
  }
}

export default App
