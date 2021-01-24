import React, { Component } from 'react'
import TodoItem from './Todoitem'

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))
  }
}

export default Todos
