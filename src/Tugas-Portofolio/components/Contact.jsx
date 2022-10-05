import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <div className="hstack vh-100">
          <div className="container">
            <h2 className="text-dark fw-bold mb-4 border-bottom border-5 d-inline-block border-dark">
              Contact
            </h2>
            <Row>
              <Col lg={6}>
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label>Your Name :</Form.Label>
                    <Form.Control type="text" placeholder="Youname" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Message :</Form.Label>
                    <Form.Control as="textarea" placeholder="Message" />
                  </Form.Group>
                </Form>
                <Button variant="outline-success">Send Message</Button>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
