import React, { Component } from 'react'
import ItemOptions from './ItemOptions.js'

export default class TodoItem extends Component {
  render() {
    return (
      <li>
        <p>{this.props.todo.text}</p>
        <ItemOptions />
      </li>
    )
  }
}
