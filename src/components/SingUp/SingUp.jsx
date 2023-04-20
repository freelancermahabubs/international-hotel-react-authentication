import React, { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

import { toast } from "react-toastify";
import "./SingUp.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const SingUp = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSingUp = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError(
        toast.error("Your Password Did Not Match", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError(
        toast.error("Please add at least Two Uppercase Letter", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError(
        toast.error("Please Add a Special Character.", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError(
        toast.error("Please add atLeast two number", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
      setError(
        toast.error("Please add atLeast three lowercase letters", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (password.length < 8) {
      setError(
        toast.error("Please add At least 8 Characters In your Password", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess(
          toast.success("SuccessFully Create Account", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
        console.log(loggedUser);
        sendVerificationEmail(result.user);
        updateUserData(result.user, name);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const sendVerificationEmail = (user) => {
    sendEmailVerification(user).then((result) => {
      console.log(result);
      setError(
        toast.error("Please Verify Your Email Address", {
          position: toast.POSITION.TOP_CENTER,
        })
      );
    });
  };

  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        setSuccess(
          toast.success("User Name Updated", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Create Account!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSingUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
