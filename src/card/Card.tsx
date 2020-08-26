import React, { Component } from "react";
import { ImageLoader } from "../image-loader/ImageLoader";
import { Login } from "../login/Login";
import { AuthAsSerivce } from "../auth-as-service/AuthAsService";
import "./Card.scss";

export class Card extends Component<{}, {}> {
  render() {
    return (
      <div className="container-card">
        <div className="left">
          <Login />
          <AuthAsSerivce />
        </div>
        <div className="right">
          <ImageLoader />
        </div>
      </div>
    );
  }
}
