import React, { Component } from "react";
import "./ImageLoader.scss";
export class ImageLoader extends Component<{}, {}> {
  exit() {
    alert("Exit!");
  }

  render() {
    return (
      <div className="image-container">
        <div className="exit" onClick={this.exit.bind(this)}>
          <i className="lni lni-close"></i>
        </div>
      </div>
    );
  }
}
