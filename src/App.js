import React, { Component } from 'react'
import './App.css'
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completd: false,
      },
      {
        id: 2,
        title: 'Dinner with family',
        completd: false,
      },
      {
        id: 3,
        title: 'coding',
        completd: false,
      },
    ],
  }

  render() {
    return (
      <div className='App'>
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App
