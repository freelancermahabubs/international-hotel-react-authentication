import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-5 ml-14 font-semibold pt-12">
      <NavLink
        to="/"
        title="Home Link"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Home
      </NavLink>
      <NavLink
        to="login"
        title="Login Link"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        LogIn
      </NavLink>
      <NavLink
        to="/singup"
        title="Sing Up Link"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Sing Up
      </NavLink>
      <NavLink
        to="/book"
        title="Book Link"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Book
      </NavLink>
    </div>
  );
};

export default Navbar;
