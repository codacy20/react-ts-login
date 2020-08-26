import React, { Component } from "react";

export class Login extends Component<{}, {}> {
  render() {
    return (
      <div className="login-container">
        <h3>Log In</h3>
        <p>
          Log in to your account to upload or download pictures, videos or
          music.
        </p>
        <input type="text" placeholder="Enter your email address" />
        <span>Forgot password?</span>
        <div className="btn">
          <span>Next</span>
          <i className="lni lni-chevron-right"></i>
        </div>
      </div>
    );
  }
}
