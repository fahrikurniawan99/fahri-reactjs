import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg='light'>
        <Container>
          <Navbar.Brand>Berita.com</Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}
