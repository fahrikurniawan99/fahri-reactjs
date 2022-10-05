import React from "react";
import { Col, Container, Row } from "react-bootstrap";

class Profile extends React.Component {
  render() {
    return (
      <section id="profile">
        <div className="min-vh-100 hstack justify-content-center mt-5 mt-lg-0">
          <Container classNamee="">
            <Row className="g-5">
              <Col lg={5}>
                <div>
                  <h2 className="fw-bold text-dark mb-3">About Me</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam eaque cum nisi adipisci laboriosam ullam,
                    repellendus eveniet eius voluptates sapiente magni dolore
                    sint eos quas ducimus expedita praesentium aliquam
                    doloremque!Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Quisquam eaque cum nisi adipisci
                    laboriosam ullam, repellendus eveniet eius voluptates
                    sapiente magni dolore sint eos quas ducimus expedita
                    praesentium aliquam doloremque!
                  </p>
                </div>
              </Col>
              <Col lg={{ span: 6, offset: 1 }}>
                <div>
                  <h2 className="fw-bold text-dark mb-3">Skills</h2>
                  <Row className="g-3">
                    <Col lg={6}>
                      <div className="shadow py-4 px-3">
                        <h5 className="fw-semibold text-dark">Javascript</h5>
                        <small className="text-black-50">
                          1 year experience
                        </small>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="shadow py-4 px-3">
                        <h5 className="fw-semibold text-dark">Javascript</h5>
                        <small className="text-black-50">
                          1 year experience
                        </small>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="shadow py-4 px-3">
                        <h5 className="fw-semibold text-dark">Javascript</h5>
                        <small className="text-black-50">
                          1 year experience
                        </small>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="shadow py-4 px-3">
                        <h5 className="fw-semibold text-dark">Javascript</h5>
                        <small className="text-black-50">
                          1 year experience
                        </small>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}
export default Profile;
