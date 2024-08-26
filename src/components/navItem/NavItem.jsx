import React from "react";
import { NavLink } from "reactstrap";
import { CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

const NavItem = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-center w-50">
      <NavLink href="/signin" className="d-flex align-items-center ">
        <CiUser className="fs-3 me-2" /> <span>SignIn</span>
      </NavLink>
      <NavLink href="/wishlist" className="d-flex align-items-center">
        <IoIosHeartEmpty className="fs-3 me-2" /> <span>Wishlist</span>
      </NavLink>
      <NavLink href="/basket" className="d-flex align-items-center ">
        <MdOutlineShoppingBag className="fs-3 me-2" /> <span>Basket</span>
      </NavLink>
    </div>
  );
};

export default NavItem;
