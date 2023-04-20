import React, { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import {
  FaGoogle,
  FaFacebookSquare,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

import "./SingUp.css";
import { Link } from "react-router-dom";

const SingUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Create Account!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control password-filed">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                className="input input-bordered"
                required
              />
              {passwordShown ? (
                <EyeSlashIcon
                  onClick={togglePassword}
                  className="eye text-blue-500"
                />
              ) : (
                <EyeIcon
                  onClick={togglePassword}
                  className="eye text-blue-500"
                />
              )}
            </div>
            <div className="form-control password-filed">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                name="confirm"
                placeholder="Confirm Password"
                className="input input-bordered"
                required
              />
              {passwordShown ? (
                <EyeSlashIcon
                  onClick={togglePassword}
                  className="eye text-blue-500"
                />
              ) : (
                <EyeIcon
                  onClick={togglePassword}
                  className="eye text-blue-500"
                />
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Create Account</button>
            </div>
            <p>
              <span className="text-sm"> Already have an account?</span>
              <Link to="/login">
                <span className="text-orange-500 pl-1">Login</span>
              </Link>
            </p>
            <div className="flex items-center gap-2">
              <div className="border-t border-gray-300 flex-grow"></div>
              <div className="w-4  text-center">or</div>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <div className="flex items-center border rounded bg-zinc-300 mx-auto gap-x-8 px-6">
              <FaGoogle className="text-3xl pl-2 text-blue-600" />
              <FaFacebookSquare className="text-3xl pl-2 text-blue-600" />
              <FaGithub className="text-3xl pl-2 text-blue-600" />
              <FaTwitter className="text-3xl pl-2 text-blue-600" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
