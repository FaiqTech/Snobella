import React from "react";
import { Container } from "reactstrap";

const MainContent = ({ children }) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};

export default MainContent;
