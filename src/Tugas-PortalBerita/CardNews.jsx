import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class CardNews extends Component {
  render() {
    return (
      <Card className={'h-100'}>
        <Card.Img src={this.props.img} variant="top" style={{height:200, objectFit:"cover"}} alt="img-news"/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.desc}</Card.Text>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between text-muted'>
          <small>{this.props.name}</small>
          <small>{this.props.time}</small>
        </Card.Footer>
      </Card>
    );
  }
}
