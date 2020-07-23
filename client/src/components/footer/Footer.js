import React from "react";

import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/shape2win"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" />
                  <p className="d-lg-none">Facebook</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/shape2win"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                  <p className="d-lg-none">Instagram</p>
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Coffee&Tea
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
