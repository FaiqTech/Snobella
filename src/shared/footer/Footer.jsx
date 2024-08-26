import React from "react";
import { Container } from "reactstrap";
import FooterHeader from "../../components/footerHeader/FooterHeader";
import FooterBody from "../../components/footerBody/FooterBody";
import FooterBottom from "../../components/footerBottom/FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <FooterHeader />
        <hr />
        <FooterBody />
        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;
