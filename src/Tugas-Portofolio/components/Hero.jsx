import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
class Hero extends React.Component {
  render() {
    return (
      <div className="bg-primary bg-opacity-10 vh-100 hstack">
        <Container>
          <Row className="">
            <Col lg={{ span: 6, offset: 2 }}>
              <h1 className="display-4 fw-bold text-dark">
                Mohamad Fahri Kurniawan
              </h1>
            </Col>
          </Row>
          <Row className="mt-lg-3">
            <Col lg={{ offset: 2 }} className="d-flex gap-1">
              <Button
                variant="primary"
                className="rounded-pill shadow px-4"
                size="sm"
                href="#profile"
              >
                Profile
              </Button>
              <Button
                variant="outline-danger"
                className="rounded-pill shadow px-4"
                size="sm"
                href="#footer"
              >
                Social Media
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Hero;
