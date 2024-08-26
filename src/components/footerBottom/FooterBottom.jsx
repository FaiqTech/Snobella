import React from "react";
import { Row, Col } from "reactstrap";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <Row className="mt-4">
      <Col md="6">
        <p className="mb-0">© 2020. All rights reserved.</p>
      </Col>
      <Col md="6" className="d-flex justify-content-end align-items-center">
        <a href="https://www.instagram.com" className="text-dark me-2">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.facebook.com" className="text-dark me-2">
          <FaFacebookF size={24} />
        </a>
        <a href="https://wa.me/" className="text-dark me-2">
          <FaWhatsapp size={24} />
        </a>
      </Col>
    </Row>
  );
};

export default FooterBottom;
