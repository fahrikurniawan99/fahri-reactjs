import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div
          className="hstack flex-column justify-content-center align-items-start"
          style={{
            height: 300,
            backgroundColor: "#eeeeee",
          }}
        >
          <div className="container">
            <h5 className="fw-bold text-secondary">Social Media</h5>
            <div className="d-flex flex-column">
              <a className="text-black-50 fs-6" href="https://id.linkedin.com/">Linked</a>
              <a className="text-black-50 fs-6" href="https://github.com/">Github</a>
              <a className="text-black-50 fs-6" href="https://www.instagram.com/">Instagram</a>
              <a className="text-black-50 fs-6" href="https://twitter.com/">Twitter</a>
            </div>
          </div>
        </div>
        <small className="text-center fw-bold text-black-50 d-block my-2">
          mohamadfahrikurniwan
        </small>
      </footer>
    );
  }
}
export default Footer;
