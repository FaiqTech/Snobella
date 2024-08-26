import React from "react";
import { Container, Input, InputGroup, InputGroupText } from "reactstrap";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <Container className="d-flex justify-content-center">
      <div className="d-flex justify-content-center w-100">
        <InputGroup className="w-75 w-md-50 w-lg-25">
          <Input type="text" placeholder="Search all product" />
          <InputGroupText>
            <FaSearch />
          </InputGroupText>
        </InputGroup>
      </div>
    </Container>
  );
};

export default SearchBar;
