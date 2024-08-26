import React from "react";
import { Row, Col, Button } from "reactstrap";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

const FooterBody = () => {
  return (
    <Row className="py-4">
      <Col md="3" className="mb-4 mb-md-0">
        <div>
          <p className="text-muted">
            The wise man therefore always holds selection. The wise man
            therefore always rejects pleasures to secure other greater
            pleasures.
          </p>
          <div className="d-flex align-items-center mb-2">
            <IoMdMail className="text-dark me-2" size={20} />
            <span className="text-muted">Snobella@gmail.com</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <IoMdCall className="text-dark me-2" size={20} />
            <span className="text-muted">+748 383 23 14</span>
          </div>
          <Button color="outline-dark" className="d-flex align-items-center">
            <FaTwitter className="me-2" size={18} />
            <span>Send Message</span>
          </Button>
        </div>
      </Col>
      <Col md="3" className="mb-4 mb-md-0">
        <h4>Shop</h4>
        <ul className="list-unstyled">
          <li className="text-muted">Shoulder Bag</li>
          <li className="text-muted">Backpack</li>
          <li className="text-muted">Tote Bag</li>
          <li className="text-muted">Hand Bag</li>
          <li className="text-muted">Evening Bags</li>
          <li className="text-muted">Purse</li>
        </ul>
      </Col>
      <Col md="3" className="mb-4 mb-md-0">
        <h4>Company</h4>
        <ul className="list-unstyled">
          <li className="text-muted">About Us</li>
          <li className="text-muted">Contact</li>
          <li className="text-muted">Terms of Use</li>
          <li className="text-muted">Customer Service</li>
        </ul>
      </Col>
      <Col md="3">
        <h4>Help</h4>
        <ul className="list-unstyled">
          <li className="text-muted">FAQ</li>
          <li className="text-muted">Delivery</li>
          <li className="text-muted">Cancellation of the Order</li>
          <li className="text-muted">Don't Go Back</li>
        </ul>
      </Col>
    </Row>
  );
};

export default FooterBody;
