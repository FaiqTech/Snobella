import React from "react";
import { Col, Input, Row } from "reactstrap";
import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";

const FooterHeader = () => {
  return (
    <Row className="mb-4">
      <Col md="6" className="d-flex align-items-center">
        <Logo />
      </Col>
      <Col md="6" className="d-flex justify-content-end">
        <SearchBar />
      </Col>
    </Row>
  );
};

export default FooterHeader;
