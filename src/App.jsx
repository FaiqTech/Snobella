import React from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import MainContent from "./layout/main/MainContent";
const App = () => {
  return (
    <Container className="app">
      <Row>
        <Col>
          <Header />
          <MainContent>
            <h1>Welcome to the App</h1>
          </MainContent>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
