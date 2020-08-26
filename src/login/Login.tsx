import React, { Component } from "react";
import "./Login.scss";

export class Login extends Component<{}, {}> {
  render() {
    return (
      <div className="login-container">
        <h3>Log In</h3>
        <p className="para">
          Log in to your account to upload or download pictures, videos or
          music.
        </p>
        <input type="text" placeholder="Enter your email address" />
        <div className="actions">
          <span>Forgot password?</span>
          <div className="btn">
            <span>Next</span>
            <i className="lni lni-chevron-right"></i>
          </div>
        </div>
      </div>
    );
  }
}
