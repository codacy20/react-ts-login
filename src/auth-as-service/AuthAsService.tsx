import React, { Component } from "react";
import "./AuthAsService.scss";

export class AuthAsService extends Component<{}, {}> {
  redirect() {
    window.open("https://mobile.twitter.com/RT_Amir", "_blank");
  }

  render() {
    return (
      <div className="auth-container">
        <div className="divide"></div>
        <span className="options">Or login with</span>
        <div className="social-contianer">
          <div className="social facebook" onClick={this.redirect.bind(this)}>
            <i className="lni lni-facebook-oval"></i>
            <span>Facebook</span>
          </div>
          <div className="social google" onClick={this.redirect.bind(this)}>
            <i className="lni lni-google"></i>
            <span>Google</span>
          </div>
        </div>
        <div className="signup">
          <span>Don't have an account yet?</span>
          <span className="underline">Sign up</span>
        </div>
      </div>
    );
  }
}
