import React, { Component } from 'react'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'

export default class Components extends Component {
  render() {
    return (
      <div>
        <h2>Class Component : </h2>
        <hr />
        <ClassComponent nama="M. Fahri Kurniawan"/>
        <br />
        <h2>Functional Component</h2>
        <hr />
        <FunctionalComponent nama="M. Fahri Kurniawan"/>
      </div>
    )
  }
}
