import React, { Component } from 'react'

export default class ClassComponent extends Component {
  state = {
    umur : 18
  }
  tambahUmur = () => {
    this.setState({umur : this.state.umur + 1})
  }
  kurangiUmur = () => {
    if(this.state.umur > 18){
      this.setState({umur : this.state.umur - 1})
    }
  }
  render() {
    return (
      <div>
        <h3> {this.props.nama} </h3>
        <h3>Umur : <button onClick={this.tambahUmur}>+</button><span> {this.state.umur} </span><button onClick={this.kurangiUmur}>-</button></h3>
      </div>
    )
  }
}
