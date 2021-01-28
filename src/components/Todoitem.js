import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        textDecoration: 'line-through',
      }
    } else {
      return {
        textDecoration: 'none',
      }
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default Todoitem
