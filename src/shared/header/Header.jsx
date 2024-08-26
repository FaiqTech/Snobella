import React from "react";
import { Navbar } from "reactstrap";
import Logo from "../../components/logo/Logo";
import SearchBar from "../../components/searchbar/SearchBar";
import NavItems from "../../components/navItem/NavItem";

const Header = () => {
  return (
    <Navbar className="header mt-3 " expand="md">
      <Logo />
      <SearchBar />
      <NavItems />
    </Navbar>
  );
};

export default Header;
