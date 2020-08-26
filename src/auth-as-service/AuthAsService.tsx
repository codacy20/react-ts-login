import React, { Component } from "react";

export class AuthAsSerivce extends Component<{}, {}> {
  render() {
    return (
      <div className="auth-container">
        <div className="divide"></div>
        <span>Or login with</span>
        <div className="social facebook">Facebook</div>
        <div className="social google">Google</div>
        <div>
          <span>Don't have an account yet?</span>
          <span>Sign up</span>
        </div>
      </div>
    );
  }
}
