import React, { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import {
  FaGoogle,
  FaFacebookSquare,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { useRef } from "react";

const Login = () => {
  const { sinIn } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate("");
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const {
    user,
    sinInWithGoogle,
    sinInWithGitHub,
    sinInWithTwitter,
    sinInWithFacebook,
    forgetPassword,
  } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    sinIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess(
          toast.success("Login Successfully", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRestPassword = (event) => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      setError(
        toast.error("Please Provide Your Email Address to Rest Password", {
          position: toast.POSITION.TOP_CENTER,
        })
      );
      return;
    }
    forgetPassword(email)
      .then(() => {
        setSuccess(
          toast.success("Please Check Your Email", {
            position: toast.POSITION.TOP_CENTER,
          })
        );
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSingIn = () => {
    sinInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setSuccess(
          toast.success("Google SinIn Success", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubSingIn = () => {
    sinInWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
        setSuccess(
          toast.success("GitHub SinIn Success", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleTwitterSingIn = () => {
    sinInWithTwitter()
      .then((result) => {
        const loggedUser = result.user;
        setSuccess(
          toast.success("Twitter SinIn Success", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebookSingIn = () => {
    sinInWithFacebook()
      .then((result) => {
        const loggedUser = result.user;
        setSuccess(
          toast.success("Facebook SinIn Success", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                placeholder="email"
                name="email"
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
                placeholder="password"
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
              <label className="label">
                <a
                  onClick={handleRestPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              <span className="text-sm">New to International-Hotel?</span>
              <Link to="/singup">
                <span className="text-orange-500 pl-1">Create New Account</span>
              </Link>
            </p>
            <div className="flex items-center gap-2">
              <div className="border-t border-gray-300 flex-grow"></div>
              <div className="w-4  text-center">or</div>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <div className="flex items-center border rounded bg-zinc-300 mx-auto gap-x-8 px-6">
              <button onClick={handleGoogleSingIn}>
                <FaGoogle className="text-3xl pl-2 text-blue-600" />
              </button>
              <button onClick={handleFacebookSingIn}>
                <FaFacebookSquare className="text-3xl pl-2 text-blue-600" />
              </button>
              <button onClick={handleGitHubSingIn}>
                <FaGithub className="text-3xl pl-2 text-blue-600" />
              </button>
              <button onClick={handleTwitterSingIn}>
                <FaTwitter className="text-3xl pl-2 text-blue-600" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
