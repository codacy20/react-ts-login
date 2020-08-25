import * as React from "react";
import { ImageLoader } from "./image-loader/ImageLoader";
import { Login } from "./login/Login";
import { AuthAsSerivce } from "./auth-as-service/AuthAsService";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
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
