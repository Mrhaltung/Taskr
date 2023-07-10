import React, { useState } from "react";
import { UilEnvelope, UilLock, UilUser } from "@iconscout/react-unicons";
import { useDispatch } from "react-redux";
import "./_auth.css";
import { logIn, signUp } from "../actions/AuthAction";

export default function Auth() {
  const initialState = { username: "", email: "", password: "" };
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const handleSignUpMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUp(data));
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    dispatch(logIn(data));
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h1 className="titleName">Taskr</h1>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <UilEnvelope className="my-auto mx-auto" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <UilLock className="my-auto mx-auto" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className="button btn" onClick={handleLogIn}>
              Login
            </button>
          </form>
          <form className="sign-up-form">
            <h1 className="titleName">Taskr</h1>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <UilUser className="my-auto mx-auto" />
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={data.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <UilEnvelope className="my-auto mx-auto" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <UilLock className="my-auto mx-auto" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className="button btn" onClick={handleSignUp}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              We help people stay connected and share ideas, thoughts, and
              opinions with others in a safe and secure environment
            </p>
            <button className="btn transparent" onClick={handleSignUpMode}>
              Sign up
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Are you one of us ?</p>
            <button
              onClick={handleSignUpMode}
              className="btn transparent"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
