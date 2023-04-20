import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex gap-5 ml-14 text-2xl font-semibold pt-12">
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
      <NavLink
        to="/specialservice"
        title="Special Service Link"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Special Services
      </NavLink>

      <div className="flex justify-between">
        {user && (
          <small>
            <span className="text-white text-2xl">{user.displayName}</span>
            <button
              className="ml-2 bg-red-600 p-2 text-white rounded-md"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </small>
        )}
      </div>
    </div>
  );
};

export default Navbar;
